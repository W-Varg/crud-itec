import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { PaisController } from './pais.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaisModel, PaisSchema } from './pais.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PaisModel.name, schema: PaisSchema }]),
  ],
  controllers: [PaisController],
  providers: [PaisService],
})
export class PaisModule {}
