import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { blue } from 'chalk';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // app.enableCors({
  //   origin: 'https://platzi.com,http://localhost:3000',
  //   methods: 'GET,HEAD,OPTIONS',
  //   credentials: true,
  // });

  // swagger
  const config = new DocumentBuilder()
    .setTitle('Paises ejemplo')
    .setDescription('Los paises API description')
    .setVersion('1.0')
    .addTag('paises')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get('port') ?? 3001;
  // const user = configService.get<string>('database.user');

  // ?? , ||
  await app
    .listen(port)
    .then(() => console.info(blue.bold(`Server running on port ${port}`)));
}
bootstrap();
