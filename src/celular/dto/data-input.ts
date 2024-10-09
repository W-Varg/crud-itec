import { ApiProperty } from '@nestjs/swagger';

export class celDatosEntrada {
  @ApiProperty()
  marca: string;
  @ApiProperty()
  modelo: string;
  @ApiProperty()
  gama: string;
  @ApiProperty()
  precio: number;
  
}
