import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import { GraphQLServer } from 'graphql-yoga';
import schema from './schema';
import decodeJWT from './utils/decodeJWT';

class App {
	public app: GraphQLServer;

	constructor() {
		this.app = new GraphQLServer({
			schema,
			context: (req) => {
				return {
					req: req.request,
				};
			},
		});
		this.middlewares();
	}

	private middlewares = (): void => {
		this.app.express.use(cors());
		this.app.express.use(logger('dev'));
		this.app.express.use(
			helmet({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false })
		);
		this.app.express.use(this.jwt);
	};

	private jwt = async (req: any, res: any, next: any): Promise<void> => {
		const token = req.get('X-JWT');
		if (token) {
			const user = await decodeJWT(token);

			req.user = user;
		}
		next();
	};
}

export default new App().app;
