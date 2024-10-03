import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Patch('actualizar/:gato_actual1') // url, link, enlace
  update(@Param('gato_actual1') nombreGato: string) {
    // captura el valor desde la url
    return this.catObjeto.actualizar(nombreGato);
  }

  @Delete('eliminar/:gato_a_eliminar') // url
  delete1(@Param('gato_a_eliminar') gato_a_eliminar: string) {
    return this.catObjeto.eliminar(gato_a_eliminar);
  }
  @Delete('eliminar/:gato_a_eliminar2/elimina-por-edad') // url
  delete2(@Param('gato_a_eliminar2') gato_a_eliminar: string) {
    return this.catObjeto.eliminar(gato_a_eliminar);
  }
  @Delete('eliminar/:gato_a_eliminar3/eliminar-por-bebe') // url
  delete3(@Param('gato_a_eliminar3') gato_a_eliminar: string) {
    return this.catObjeto.eliminar(gato_a_eliminar);
  }
}
