import * as dotenv from 'dotenv';
dotenv.config();

import * as passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './util/exception-filter';
import { hParseBoolean } from './util/helpers/env';
// import * as swagger from './util/swagger';
import swagger from './util/swagger';
import { origin } from './config/cors';

const isSwaggerEnabled = hParseBoolean(process.env.IS_SWAGGER_ENABLED);
const appPort = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: { origin },
  });
  app.setGlobalPrefix('api/v1');
  if (isSwaggerEnabled) {
    // swagger.attach(app);
    swagger(app);
  }
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(appPort);
}
bootstrap();
