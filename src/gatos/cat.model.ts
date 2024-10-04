import { ApiProperty } from '@nestjs/swagger';

export class CatModel {
  //identificador unico
  id?: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  raza: string;

  @ApiProperty()
  edad: number;

  @ApiProperty()
  esBebe: boolean;
}
