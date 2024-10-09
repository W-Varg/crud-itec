import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { blue } from 'chalk';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Paises ejemplo')
    .setDescription('Los paises API description')
    .setVersion('1.0')
    .addTag('paises')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app
    .listen(3001)
    .then(() => console.info(blue.bold('Server running on port 3001')));
}
bootstrap();
