import { Resolvers } from 'src/types/resolvers';
import { EmailSignInMutationArgs, EmailSignInResponse } from 'src/types/graph';
import User from '../../../entities/User';
import createJWT from '../../../utils/createJWT';

const resolvers: Resolvers = {
	Mutation: {
		EmailSignIn: async (_, args: EmailSignInMutationArgs): Promise<EmailSignInResponse> => {
			try {
				const { email, password } = args;
				const user = await User.findOne({ email });
				if (!user) {
					console.log('e');
					return {
						ok: false,
						error: 'No User',
						token: '',
					};
				} else {
					const checkPassword = await user.comparePassword(password);
					if (checkPassword) {
						return {
							ok: true,
							error: 'login',
							token: createJWT(user.id),
						};
					} else {
						return {
							ok: false,
							error: 'Password is wrong',
							token: '',
						};
					}
				}
			} catch (e) {
				return {
					ok: false,
					error: e.message,
					token: '',
				};
			}
		},
	},
};

export default resolvers;
