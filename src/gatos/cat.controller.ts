import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiTags } from '@nestjs/swagger';
import { CatBody } from './cat.datos.entrada';

@ApiTags('modulo de gatos')
@Controller()
export class CatController {
  constructor(private readonly catObjeto: CatService) {} // inicializar valores

  @Post('create')
  create(@Headers() cabereza: string, @Body() body: CatBody) {
    console.log(body);
    return this.catObjeto.create(cabereza);
  }

  @Get('read')
  read() {
    return `todos los gatos`;
  }
  update() {
    return `el gato fue actualizado`;
  }
  delete() {
    return `el gato fue eliminado`;
  }
}
