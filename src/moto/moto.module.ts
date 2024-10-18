import { Module } from '@nestjs/common';
import { motoController } from './moto.controller';
import { motoService } from './moto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MotoModel, MotoSchema } from './dto/moto.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MotoModel.name, schema: MotoSchema }]),
  ],
  controllers: [motoController],
  providers: [motoService],
})
export class motoModule {}
