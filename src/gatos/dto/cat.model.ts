import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// modelo que se va almcenar en la base de datos
export type CatDocument = HydratedDocument<CatModel>;

@Schema() // decorador que habilita la clase en la base de datos, // paso 2
export class CatModel {
  id?: number; // 1 , 3 ,4, 5   //identificador unico

  @Prop() // paso 1, agregar decoradorers @Props a las propiedades de la clase
  nombre: string;

  @Prop()
  raza: string;

  @Prop()
  edad: number;

  @Prop()
  esBebe: boolean;

  @Prop() // decorador que habilita este campo o esta variable para la base de datos
  estaAutorizado: boolean;

  @Prop()
  fechaCreacion: Date;

  @Prop()
  usuarioCreadorId: number;

  @Prop()
  fechaActualizacion?: Date;
  @Prop()
  usuarioActualizadorId?: number;
}

export const CatSchema = SchemaFactory.createForClass(CatModel);
