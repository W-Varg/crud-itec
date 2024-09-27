import { ApiProperty } from '@nestjs/swagger';

export class CatDatosEntrada {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  raza: string;

  @ApiProperty()
  edad: number;

  @ApiProperty()
  esBebe: boolean;
}
