import { Module } from '@nestjs/common';
import { AvionController } from './avion.controller';
import { AvionService } from './avion.service';

@Module({
  imports: [],
  controllers: [AvionController],
  providers: [AvionService],
})
export class AvionModule {}
