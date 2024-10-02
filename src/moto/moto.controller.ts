import { Body, Controller, Get, Post } from '@nestjs/common';
import { motoService } from './moto.service';
import { ApiTags } from '@nestjs/swagger';
import { motoEntrada } from './data-input';
@ApiTags('Modulo de Motos')
@Controller()
export class motoController {
  constructor(private readonly motoObjeto: motoService) {}
  @Post('')
  crear(@Body() body: motoEntrada) {
    return this.motoObjeto.crear(body);
  }
  @Get('listar/marcas')
  listar() {
    return this.motoObjeto.listar();
  }
  actualizar() {
    return `moto actualizada`;
  }
  borrar() {
    return `moto eliminada`;
  }
}
