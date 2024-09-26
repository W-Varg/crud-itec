import { Module } from '@nestjs/common';
import { motoController } from './moto.controller';
import { motoService } from './moto.service';

@Module({
  controllers: [motoController],
  providers: [motoService],
})
export class motoModule {}
