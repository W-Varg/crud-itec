import { ApiProperty } from '@nestjs/swagger';
import {
  Contains,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';

//dto de entrada
export class CatDatosEntrada {
  @IsNotEmpty({ message: 'debe enviar el nombre del gato, es obligatorio' })
  @Length(3, 10, { message: 'el nombre debe ser entre 3 y 10 caracteres' })
  @ApiProperty()
  nombre: string;

  @Contains('si', { message: 'la raza debe contener la letra "si"' })
  @ApiProperty()
  raza: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 1, required: false })
  edad?: number;

  @IsBoolean({ message: 'campo esBebe debe ser true o false' }) // true o false , verdadero o falso
  @ApiProperty()
  esBebe: boolean;

  @ApiProperty({ default: false })
  estaAutorizado?: boolean;
}

// paso 1, crear clase de entrada para datos a actulizar
export class CatActualizarEntrada {
  @Length(3, 10, { message: 'el nombre debe ser entre 3 y 10 caracteres' })
  @IsOptional()
  @ApiProperty()
  nombre?: string;

  @ApiProperty()
  @IsOptional()
  raza?: string;
}
