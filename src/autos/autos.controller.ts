import { Controller, Get, Post, Headers, Patch, Delete } from '@nestjs/common';
import { AutosService } from './autos.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('MODULO DE AUTOS')
@Controller('Autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post('create')
  create(@Headers() cabereza: string) {
    this.autosService.create(cabereza);
    return `Auto creado exitosamente`;
  }

  @Get('read')
  read() {
    return `Todos los Autos`;
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
