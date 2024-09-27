import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiTags } from '@nestjs/swagger';
import { CatDatosEntrada } from './datos-entrada.input';

@ApiTags('modulo de gatos')
@Controller('')
export class CatController {
  constructor(private readonly catObjeto: CatService) {} // inicializar valores

  @Post('api/v6/onboarding/info')
  create(@Body() body: CatDatosEntrada) {
    return this.catObjeto.create(body);
  }

  @Get('listar')
  read() {
    return this.catObjeto.listar();
  }

  @Patch('actualizar')
  update() {
    return `el gato fue actualizado`;
  }
  @Delete('eliminar')
  delete() {
    return `el gato fue eliminado`;
  }
}
