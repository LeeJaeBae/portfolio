import { Resolvers } from 'src/types/resolvers';
import privateResolver from '../../../utils/privateResolver';

import {
	CompleteEmailVerificationMutationArgs,
	CompleteEmailVerificationResponse,
} from 'src/types/graph';
import User from '../../../entities/User';
import Verification from '../../../entities/Verification';

const resolvers: Resolvers = {
	Mutation: {
		CompleteEmailVerification: privateResolver(
			async (
				_,
				args: CompleteEmailVerificationMutationArgs,
				{ req }
			): Promise<CompleteEmailVerificationResponse> => {
				const user: User = req.user;
				const { key } = args;
				if (user.email && !user.verifiedEmail) {
					try {
						const verificaion = await Verification.findOne({
							key,
							payload: user.email,
						});
						if (verificaion) {
							user.verifiedEmail = true;
							user.save();
							return {
								ok: true,
								error: null,
							};
						} else {
							return {
								ok: false,
								error: 'Cant verify the email',
							};
						}
					} catch (error) {
						return {
							ok: false,
							error: error.message,
						};
					}
				} else {
					return {
						ok: false,
						error: 'no email to verify',
					};
				}
			}
		),
	},
};

export default resolvers;
