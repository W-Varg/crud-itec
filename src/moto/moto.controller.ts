import { Controller, Get, Post } from '@nestjs/common';
import { motoService } from './moto.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags()
@Controller()
export class motoController {
  constructor(private readonly motoObjeto: motoService) {}
  @Post('Registrar/crear/motos')
  crear() {
    //this.motoObjeto.crear(marca);
    return `moto creada`;
  }
  @Get('listar/marcas')
  leer() {
    return `todos las marcas`;
  }
  actualizar() {
    return `moto actualizada`;
  }
  borrar() {
    return `moto eliminada`;
  }
}
