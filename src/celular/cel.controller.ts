import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { celService } from './cel.service';
import { celDatosEntrada } from './data-input';
@ApiTags('Modulo Celulares')
@Controller('')
export class celController {
  constructor(private readonly celObjeto: celService) {}
  @Post('Instanciar_Celular')
  create(@Body() body: celDatosEntrada) {
    return this.celObjeto.create(body);
  }
  @Get('Listar_Celulares')
  list() {
    return this.celObjeto.list();
  }
  @Patch('Actualizar_Celular')
  update_1(@Param('Celular_Actual') nombreCel: string) {
    return this.celObjeto.update(nombreCel);
  }
  @Delete('Eliminar_Celular')
  delete_1(@Param('Celular_a_eliminar') cel_a_eliminar: string) {
    return this.celObjeto.delete(cel_a_eliminar);
  }
}
