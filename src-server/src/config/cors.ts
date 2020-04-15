import { hParseString, hParseBoolean } from 'util/helpers/env';

const allowedOrigins = [];

if (hParseBoolean(process.env.IS_LOCALHOST_CORS_ENABLED)) {
  allowedOrigins.push(/.localhost:4200$/);
}

if (process.env.FRONT_END_BASE_DOMAIN) {
  const frontEndRegex = new RegExp(
    '^https?:\\/\\/(www.)?(.+\\.)?' +
      hParseString(process.env.FRONT_END_BASE_DOMAIN).replace(/\./g, '\\.') +
      '$',
  );
  allowedOrigins.push(frontEndRegex);
}

if (!allowedOrigins.length) {
  allowedOrigins.push('*');
}

export const origin = allowedOrigins;
