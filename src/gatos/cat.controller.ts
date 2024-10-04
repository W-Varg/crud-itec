import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiTags } from '@nestjs/swagger';
import { CatDatosEntrada } from './datos-entrada.input';
import { CatModel } from './cat.model';
import { randomInt } from 'crypto';

@ApiTags('modulo de gatos')
@Controller('gatos')
export class CatController {
  constructor(private readonly catObjeto: CatService) {} // inicializar valores

  @Post('registrar')
  async create(@Body() body: CatDatosEntrada): Promise<CatModel> {
    // console.log(body.edad, Number(body.edad));
    if (Number(body.edad) > 0) {
      console.log('paso la validacion');
    } else {
      throw new BadRequestException('error de validacion');
    }

    if (typeof body.nombre !== 'string') {
      console.log(
        typeof body.nombre,
        'string',
        typeof body.nombre !== 'string',
      );

      throw new BadRequestException(
        'error de validacion, nombre debe ser string',
      );
    }

    if (body.estaAutorizado === false) {
      throw new UnauthorizedException(
        'usted no esta autorizado para comsumir este servicio',
      );
    }

    if (body.raza === 'siames') {
      throw new BadGatewayException('la base de datos esta llna');
    }

    // default 201
    const catModel = this.catObjeto.create({
      ...body,
      id: Number(randomInt(1, 10)),
    });

    return catModel;
  }

  @Get('listar')
  read() {
    return this.catObjeto.listar();
  }

  @Patch('actualizar/:id') // url, link, enlace
  update(@Param('id') id: number, @Body() body: CatDatosEntrada) {
    // captura el valor desde la url
    return this.catObjeto.actualizar(id, body);
  }

  @Delete('eliminar/:id') // url
  delete1(@Param('id') gato_a_eliminar: string) {
    return this.catObjeto.eliminar(gato_a_eliminar);
  }
  // @Delete('eliminar/:gato_a_eliminar2/elimina-por-edad') // url
  // delete2(@Param('gato_a_eliminar2') gato_a_eliminar: string) {
  //   return this.catObjeto.eliminar(gato_a_eliminar);
  // }
  // @Delete('eliminar/:gato_a_eliminar3/eliminar-por-bebe') // url
  // delete3(@Param('gato_a_eliminar3') gato_a_eliminar: string) {
  //   return this.catObjeto.eliminar(gato_a_eliminar);
  // }
}
