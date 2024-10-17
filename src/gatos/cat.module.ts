import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModel, CatSchema } from './dto/cat.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CatModel.name, schema: CatSchema }]), // paso 3, agregmo este modulo
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {} // presionar ctrl + shift + f .
