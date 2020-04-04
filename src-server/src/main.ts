import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AllExceptionsFilter } from './util/exception-filter';
import swagger from './util/swagger';

const isSwaggerEnabled =
  process.env.IS_SWAGGER_ENABLED && process.env.IS_SWAGGER_ENABLED === 'true';
const appPort = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  if (isSwaggerEnabled) {
    swagger(app);
  }
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(appPort);
}
bootstrap();
