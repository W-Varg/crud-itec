import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PeliculaService } from './pelicula.service';

@ApiTags('modulo de peliculas')
@Controller('Pelicula')
export class PeliculaController {
  constructor(private readonly peliculaObjeto: PeliculaService) {} // inicializar valores

  @Post('create')
  create() {
    return `La Pelicula se actualizo correctamente`;
  }

  @Get('read')
  read() {
    return `La Pelicula existente`;
  }
  @Patch('actualizar/:peliculaBuscada')
  update() {
    return `La Pelicula se actualizo correctamente`;
  }
  @Delete('Eliminar/:peliculaEliminar')
  delete() {
    return `La Pelicula se elimino correctamente`;
  }
}
