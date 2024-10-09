import { Module } from '@nestjs/common';
import { celService } from './cel.service';
import { celController } from './cel.controller';
@Module({
  controllers: [celController],
  providers: [celService],
})
export class celModule {}
