import * as bodyParser from 'body-parser';

export const setupBodyparser = app => {
  app.post(
    '/user/avatar',
    bodyParser.urlencoded({ limit: '7mb', extended: true }),
  );
};
