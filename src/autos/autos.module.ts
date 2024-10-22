import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AutosModel, AutosSchema } from './dto/autos.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: AutosModel.name, schema: AutosSchema }]), //Paso 3 agregamos este codigo
  ],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
