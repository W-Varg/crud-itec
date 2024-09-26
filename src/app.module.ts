import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './gatos/cat.module';
import { AvionModule } from './avion/avion.module';

@Module({
  imports: [CatModule, AvionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
