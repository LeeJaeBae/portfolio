import { Resolvers } from 'src/types/resolvers';
import { EmailSignInMutationArgs, EmailSignInResponse } from 'src/types/graph';
import User from 'src/entities/User';

const resolvers: Resolvers = {
	Mutation: {
		EmailSignIn: async (_, args: EmailSignInMutationArgs): Promise<EmailSignInResponse> => {
			try {
				const { email, password } = args;
				const user = await User.findOne({ email });
				if (!user) {
					return {
						ok: false,
						error: 'No User',
						token: null,
					};
				}

				const checkPassword = await user.comparePassword(password);
				if (checkPassword) {
					return {
						ok: true,
						error: null,
						token: '',
					};
				} else {
					return {
						ok: false,
						error: 'Password is wrong',
						token: null,
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
