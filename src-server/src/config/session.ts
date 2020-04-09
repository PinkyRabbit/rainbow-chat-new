/*
import { connection as mongooseConnection } from 'mongoose';
import * as connectMongo from 'connect-mongo';
import * as session from 'express-session';

import { hParseInt, hParseString, hParseBoolean } from '../util/helpers/env';

const sessionHours = hParseInt(process.env.SESSION_HOURS, 168);
const secret = hParseString(process.env.SESSION_SECRET);
const isHttps = hParseBoolean(process.env.IS_HTTPS);

export const developmentSession = () => ({
  secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: isHttps,
    maxAge: 1000 * 60 * 60 * sessionHours,
    httpOnly: false, // enable javascript
  },
  store: new session.MemoryStore(),
  proxy: isHttps,
});

export const productionSession = () => {
  const MongoStore = connectMongo(session);

  return {
    secret,
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: isHttps,
      maxAge: 1000 * 60 * 60 * sessionHours,
      httpOnly: false, // enable javascript
    },
    store: new MongoStore({
      mongooseConnection,
      collection: 'askjgdkjagsdk',
    }),
    proxy: isHttps,
  };
};
*/
