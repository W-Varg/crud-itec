import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type MotoDocument = HydratedDocument<MotoModel>;
@Schema()
export class MotoModel {
  id?: number;
  @Prop()
  marca: string;
  @Prop()
  modelo: string;
  @Prop()
  cilindrada: number;
  @Prop()
  precio: number;
}
export const MotoSchema = SchemaFactory.createForClass(MotoModel);
