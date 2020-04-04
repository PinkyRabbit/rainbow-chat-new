import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const options = new DocumentBuilder()
  .setTitle('Rainbow Chat API')
  .setDescription(
    // eslint-disable-next-line max-len
    'API for chat',
  )
  .setBasePath('api/v1')
  .setVersion('0.0.1')
  .addTag('Authorization')
  .build();

export default app => {
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
