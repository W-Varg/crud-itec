import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AutosService } from './autos.service';
import { ApiTags } from '@nestjs/swagger';
import { AutosDatosEntrada } from './datos-entrada.imputs';
@ApiTags('MODULO DE AUTOS')
@Controller('Autos')
export class AutosController {
  constructor(private readonly autosObjeto: AutosService) {}

  @Post('insertar')
  create(@Body() body: AutosDatosEntrada) {
    return this.autosObjeto.create(body);
  }
  @Get('listar')
  async read() {
    const autos = await this.autosObjeto.listar();

    const autosFormateados = autos.map((cadaUnoDeLosAutos) => {
      return {
        marca: cadaUnoDeLosAutos.marca,
        modelo: cadaUnoDeLosAutos.modelo,
      };
    });
    return autosFormateados;
  }

  @Get('detalle/: id')
  detalleDeAuto(@Param('id') idDeAuto: string) {
    return this.autosObjeto.detalleautos(idDeAuto);
  }

  @Patch('Actualizar')
  update() {
    return `el Auto fue actualizado`;
  }
  @Delete('Eliminar')
  delete() {
    return `el Auto fue eliminado`;
  }
}
