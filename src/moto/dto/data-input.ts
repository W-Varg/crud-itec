import { ApiProperty } from '@nestjs/swagger';

export class motoEntrada {
  @ApiProperty()
  marca: string;
  @ApiProperty()
  modelo: string;
  @ApiProperty()
  cilindrada: number;
  @ApiProperty()
  precio: number;
}
