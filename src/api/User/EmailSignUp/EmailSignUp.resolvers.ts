import { Resolvers } from 'src/types/resolvers';

import { EmailSignUpMutationArgs, EmailSignUpResponse } from 'src/types/graph';
import User from '../../../entities/User';
import createJWT from '../../../utils/createJWT';

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
					const newUser = await User.create({ ...args });
					newUser.save();
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
