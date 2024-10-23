import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { motoService } from './moto.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { motoEntrada } from './dto/data-input';
import { AuthGuard } from 'src/auth/auth.guard';
@ApiTags('Modulo de Motos')
@Controller()
export class motoController {
  constructor(private readonly motoObjeto: motoService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
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
