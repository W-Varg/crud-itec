import { ApiProperty } from '@nestjs/swagger';
import {
  Contains,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Length,
} from 'class-validator';

//dto de entrada
export class AutosDatosEntrada {
  @IsNotEmpty({ message: 'debe enviar el modelo del auto, es obligatorio' })
  @Length(3, 10, { message: 'el modelo debe ser entre 3 y 10 caracteres' })
  @ApiProperty()
  modelo: string;

  @Contains('si', { message: 'la marca debe contener la letra "si"' })
  @ApiProperty()
  marca: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ default: 1, required: false })
  anio: number;
}

// paso 1, crear clase de entrada para datos a actulizar
export class AutosActualizarEntrada {
  @Length(3, 10, { message: 'el modelo debe ser entre 3 y 10 caracteres' })
  @IsOptional()
  @ApiProperty()
  modelo: string;

  @ApiProperty()
  @IsOptional()
  marca: string;
}
