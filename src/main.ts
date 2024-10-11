import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';
import { ExceptionHandlerFilter } from './filter/filter.exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = appConfig()
  app.setGlobalPrefix("/api/v1")
  app.useGlobalFilters(new ExceptionHandlerFilter)
  await app.listen(config.port,config.host,()=>{
    console.log('Server is running on port:',config.port)
  });
}
bootstrap();
