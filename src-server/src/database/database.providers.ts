import * as mongoose from 'mongoose';
import databaseConstants from './database.constants';
import UserSchema from './schemas/user/user.schema';

const connectionUrl = process.env.MONGODB_CONNECTION_STRING;
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const databaseProviders = [
  {
    provide: databaseConstants.repositoryNameFor.Connection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(connectionUrl, connectionOptions),
  },
  {
    provide: databaseConstants.repositoryNameFor.User,
    useFactory: (connection: mongoose.Connection) =>
      connection.model('User', UserSchema),
    inject: [databaseConstants.repositoryNameFor.Connection],
  },
];
