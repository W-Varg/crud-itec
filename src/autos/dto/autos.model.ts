import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AutosDocument = HydratedDocument<AutosModel>;
@Schema() // Paso 2: decorador que habilita la clase en la base de datos
export class AutosModel {
  @Prop() //paso 1: agregar decoradores @Prop a las propiedades de las claes
  marca: string;
  @Prop()
  modelo: string;
  @Prop()
  anio: number;
}

export const AutosSchema = SchemaFactory.createForClass(AutosModel);
