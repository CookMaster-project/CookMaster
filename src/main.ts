import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = appConfig()
  app.setGlobalPrefix("/api/v1")
  await app.listen(config.port,config.host,()=>{
    console.log('Server is running on port:',config.port)
  });
}
bootstrap();
