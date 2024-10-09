import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaisService } from './pais.service';
import { ApiTags } from '@nestjs/swagger';
import { PaisDatosEntrada } from './datos-entrada.input';
import { randomInt } from 'crypto';
import { PaisModel } from './pais.model';

@ApiTags('modulo de paises')
@Controller('Pais')
export class PaisController {
  constructor(private readonly paisObjeto: PaisService) {} // inicializar valores

  @Post('create')
  async create(@Body() body: PaisDatosEntrada): Promise<PaisModel> {
    if (body.poblacion > 0) {
      console.log('Dato valido');
    } else {
      throw new BadRequestException('Dato Población debe ser numérico');
    }
    if (
      typeof body.nombre !== 'string' ||
      typeof body.capital !== 'string' ||
      typeof body.continente !== 'string' ||
      typeof body.idioma !== 'string' ||
      typeof body.presidente !== 'string'
    ) {
      throw new BadRequestException('El valor debe ser un texto');
    }
    const cont = this.paisObjeto.create({
      ...body,
      id: Number(randomInt(1, 10)),
    });
    return;
  }

  @Get('read')
  read() {
    return this.paisObjeto.read();
  }
  @Patch('actualizar/:paisBuscado')
  update(@Param('paisBuscado') nombrePais: string) {
    return this.paisObjeto.update(nombrePais);
  }
  @Delete('Eliminar/:paisEliminar')
  delete(@Param('paisEliminar') nombrePais: string) {
    return this.paisObjeto.delete(nombrePais);
  }
}
