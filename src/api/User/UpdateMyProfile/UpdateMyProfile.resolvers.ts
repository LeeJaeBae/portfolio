import User from '../../../entities/User';
import { Resolvers } from 'src/types/resolvers';
import privateResolver from '../../../utils/privateResolver';

const resolvers: Resolvers = {
	Mutation: {
		UpdateMyProfile: privateResolver(async (_, args, { req }) => {
			const user: User = req.user;
			const notNull = {};
			Object.keys(args).forEach((key) => {
				if (args[key] !== null) {
					notNull[key] = args[key];
				}
			});

			if (notNull.hasOwnProperty('password')) {
				user.password = notNull['password'];
				user.save();
				delete notNull['password'];
			}

			try {
				await User.update({ id: user.id }, { ...notNull });
				return {
					ok: true,
					error: null,
				};
			} catch (e) {
				return { ok: false, error: e.message };
			}
		}),
	},
};

export default resolvers;
