import { Resolvers } from 'src/types/resolvers';

import { EmailSignUpMutationArgs, EmailSignUpResponse } from 'src/types/graph';
import User from 'src/entities/User';

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
					return {
						ok: true,
						error: null,
						token: 'comming soon',
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
