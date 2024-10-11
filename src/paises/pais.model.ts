import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type PaisDocument = HydratedDocument<PaisModel>;

@Schema()
export class PaisModel {
  id?: number;

  @ApiProperty()
  @Prop()
  nombre: string;

  @ApiProperty()
  @Prop()
  continente: string;

  @ApiProperty()
  idioma: string;

  @ApiProperty()
  capital: string;

  @ApiProperty()
  poblacion: number;

  @ApiProperty()
  presidente: string;

  @ApiProperty()
  autorizado?: boolean;
}

export const PaisSchema = SchemaFactory.createForClass(PaisModel);
