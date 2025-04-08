import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('040Tournaments')
    .setDescription('Basketball tournaments API')
    .setVersion('0.0.1')
    .addTag('basketball')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  
  app.enableCors({ origin: 'http://localhost:4200' });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
