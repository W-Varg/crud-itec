import { Controller, Get, Post, Headers, Patch, Delete } from '@nestjs/common';
import { AvionService } from './avion.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('modulo de aviones')

@Controller('Avion')
export class AvionController {
  constructor(private readonly avionService: AvionService) { }

  @Post('create')
  create(@Headers() cabereza: string) {
    this.avionService.create(cabereza);
    return `Avion creado exitosamente`;
  }

  @Get('read')
  read() {
    return `Todos los aviones`;
  }
  @Patch('Actualizar')
  update() {
    return `el avion fue actualizado`;
  }
  @Delete('Eliminar')
  delete() {
    return `el avion fue eliminado`;
  }
}