import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { AppModule } from './app';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api/v1');

  if (process.env?.NODE_ENV?.trim() == 'development') {
    app.use(morgan('tiny'));
  }

  app.enableCors({
    origin: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  });

  // CSURF configuration
  // app.use(csurf());

  const config = new DocumentBuilder()
    .setTitle('CookMaster')
    .setDescription('The CookMaster API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get<number>('appConfig.port'), () => {
    console.log(
      `Listening on port ${configService.get<number>('appConfig.port')}`,
    );
  });
}
bootstrap();
