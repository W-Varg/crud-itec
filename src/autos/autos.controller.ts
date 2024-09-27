import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
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
  read() {
    return this.autosObjeto.listar();
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
