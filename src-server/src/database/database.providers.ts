import * as mongoose from 'mongoose';

import databaseConstants from './database.constants';
import UserSchema from './schemas/user/user.schema';

const connectionUrl = process.env.MONGODB_CONNECTION_STRING;

export const databaseProviders = [
  {
    provide: databaseConstants.repositoryNameFor.Connection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
  },
  {
    provide: databaseConstants.repositoryNameFor.User,
    useFactory: (connection: mongoose.Connection) =>
      connection.model('User', UserSchema),
    inject: [databaseConstants.repositoryNameFor.Connection],
  },
];