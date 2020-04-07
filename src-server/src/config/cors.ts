const allowedOrigins = [];

if (process.env.IS_LOCALHOST_CORS_ENABLED &&
  process.env.IS_LOCALHOST_CORS_ENABLED === 'true') {
  allowedOrigins.push(/.localhost:4200$/);
}

if (process.env.FRONT_END_BASE_DOMAIN) {
  const frontEndRegex = new RegExp(
    '^https?:\\/\\/(www.)?(.+\\.)?' + process.env.FRONT_END_BASE_DOMAIN.replace(/\./g, '\\.') + '$',
  );
  allowedOrigins.push(frontEndRegex);
}

if (allowedOrigins.length) {
  console.log('No allowed origins setted');
  process.exit(1);
}

export const origin = allowedOrigins;
