import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AutosDocument = HydratedDocument<AutosModel>;
@Schema()
export class AutosModel {
  @Prop()
  marca: string;
  @Prop()
  modelo: string;
  @Prop()
  anio: number;
}

export const AutosSchema = SchemaFactory.createForClass(AutosModel);
