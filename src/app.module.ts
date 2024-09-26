import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './gatos/cat.module';
import { motoModule } from './moto/moto.module';

@Module({
  imports: [CatModule, motoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
