import { ApiProperty } from '@nestjs/swagger';

export class AutosDatosEntrada {
  @ApiProperty()
  Marca: string;

  @ApiProperty()
  Modelo: string;

  @ApiProperty()
  Año: number;
}
