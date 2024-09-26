import { Controller, Delete, Get, Headers, Patch, Post } from '@nestjs/common';
import { PaisService } from './pais.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('modulo de paises')
@Controller('Pais')
export class PaisController {
  constructor(private readonly paisObjeto: PaisService) {} // inicializar valores

  @Post('create')
  create(@Headers() cabereza: string) {
    return this.paisObjeto.create(cabereza);
  }

  @Get('read')
  read() {
    return `todos los paises`;
  }
  @Patch('actualizar')
  update() {
    return `el pais fue actualizado`;
  }
  @Delete('Eliminar')
  delete() {
    return `el pais fue eliminado`;
  }
}
