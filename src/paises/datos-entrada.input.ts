import { ApiProperty } from '@nestjs/swagger';

export class PaisDatosEntrada {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
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
  autorizado: boolean;
}
