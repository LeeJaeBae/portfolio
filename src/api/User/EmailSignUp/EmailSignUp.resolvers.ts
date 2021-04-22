import { Resolvers } from 'src/types/resolvers';

import { EmailSignUpMutationArgs, EmailSignUpResponse } from 'src/types/graph';
import User from '../../../entities/User';
import createJWT from '../../../utils/createJWT';
import Verification from '../../../entities/Verification';
import { sendVerificationEmail } from '../../../utils/sendEmail';

const resolvers: Resolvers = {
	Mutation: {
		EmailSignUp: async (_, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
			try {
				const { email } = args;
				const existingUser = await User.findOne({ email });
				if (existingUser) {
					return {
						ok: false,
						error: 'existing email. You should log in instead',
						token: null,
					};
				} else {
					const newUser = await User.create({ ...args }).save();
					if (newUser.email) {
						const emailVerification = await Verification.create({
							payload: newUser.email,
							target: 'EMAIL',
						}).save();
						await sendVerificationEmail(newUser.fullName, emailVerification.key);
					}
					return {
						ok: true,
						error: null,
						token: createJWT(newUser.id),
					};
				}
			} catch (e) {
				return {
					ok: false,
					error: e.message,
					token: null,
				};
			}
		},
	},
};

export default resolvers;
