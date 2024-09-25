import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { blue } from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app
    .listen(3001)
    .then(() => console.info(blue.bold('Server running on port 3001')));
}
bootstrap();
