import { hParseString, hParseInt } from 'util/helpers/env';

export const jwtConstants = {
  secret: hParseString(process.env.JWT_SECRET),
  expiresIn: `${hParseInt(process.env.JWT_EXPIRES_IN_MIN, 60)}m`,
  jwtHeaderName: hParseString(process.env.JWT_HEADER_NAME, 'Bearer'),
};
