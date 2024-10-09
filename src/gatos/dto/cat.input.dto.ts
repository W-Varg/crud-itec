import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

//dto de entrada
export class CatDatosEntrada {
  @IsNotEmpty({ message: 'debe enviar el nombre del gato, es obligatorio' })
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  raza: string;

  @IsNumber()
  @ApiProperty({ default: 1 })
  edad?: number;

  @IsBoolean({ message: 'campo esBebe debe ser true o false' }) // true o false , verdadero o falso
  @ApiProperty()
  esBebe: boolean;

  @ApiProperty({ default: false })
  estaAutorizado?: boolean;
}
