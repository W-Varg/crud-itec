import {
  // BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
  // UnauthorizedException,
} from '@nestjs/common';
import { CatService } from './cat.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CatActualizarEntrada,
  CatDatosEntrada,
  SubirFotoDto,
} from './dto/cat.input.dto';
import { CatModel } from './dto/cat.model';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { FileInterceptor } from '@nestjs/platform-express';
import * as pathFile from 'path';
import * as fsFile from 'fs';
import { randomInt } from 'crypto';
// import { randomInt } from 'crypto';

@ApiTags('modulo de gatos')
@Controller('gatos')
export class CatController {
  constructor(private readonly catService: CatService) {} // inicializar valores

  @UseInterceptors(FileInterceptor('file'))
  @Post('subir/foto')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    required: true,
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    // guardar archivo en directorio fotos fotos

    // archivo en memoria

    // - definir directorio
    // - definir el nombre
    // - escribir ese archivo que esta memoria(buffer) en ese (direcotrio, nombre)

    const lugarDeGuardado = pathFile.join(
      __dirname,
      '../../imagenes/gatos/wilber/cesar',
    );

    console.log(lugarDeGuardado);

    if (!fsFile.existsSync(lugarDeGuardado)) {
      // verificar si el directorio existe (inviertiendo)
      fsFile.mkdirSync(lugarDeGuardado, { recursive: true }); // crear directorio
    }

    console.log(file);

    // const nombreArchivo = `${new Date().getTime()} - ${file.originalname}`;
    const lugarDeGuardoFinal =
      lugarDeGuardado + '/' + randomInt(1, 1000) + file.originalname;

    fsFile.writeFileSync(lugarDeGuardoFinal, file.buffer);

    return 'se subo el archivo correctamente' + 'hola mu8ndo' + 'ok';
  }

  @ApiBearerAuth()
  @Post('registrar') // ok
  async create(
    @Body() body: CatDatosEntrada,
    @Headers() headers: any,
  ): Promise<CatModel> {
    // console.log('ingreso cuando los datos son validos');
    // console.log(headers.authorization?.name === 'cesar');
    if (headers.authorization?.name === 'cesar') {
      console.log('tiene permitido crear gatos');
    } else {
      throw new BadRequestException('usted no tiene permitido crear gatos');
      // termina la ejecucion del programa
    }

    // console.log(body.edad, Number(body.edad));
    if (Number(body.edad) > 0) {
      console.log('paso la validacion');
    } else {
      throw new BadRequestException('error de validacion');
    }

    // if (typeof body.edad == 'string')
    //   throw new BadRequestException(
    //     'error de validacion, edad debe ser number',
    //   );

    // if (typeof body.nombre !== 'string') {
    //   console.log(
    //     typeof body.nombre,
    //     'string',
    //     typeof body.nombre !== 'string',
    //   );

    //   throw new BadRequestException(
    //     'error de validacion, nombre debe ser string',
    //   );
    // }

    // if (body.estaAutorizado === false) {
    //   throw new UnauthorizedException(
    //     'usted no esta autorizado para comsumir este servicio',
    //   );
    // }

    // if (body.raza === 'siames') {
    //   throw new BadGatewayException(
    //     'la memoria ram no es suficiente para procesar esta peticion',
    //   );
    // }

    // default 201
    const gatoCreadoEnService = this.catService.create(body);
    return gatoCreadoEnService;
  }

  @Throttle({ default: { limit: 3, ttl: 2000 } })
  @Get('listar') // ok
  read(
    @Query('raza') razaDto?: string, // que sea de la raza siames
    @Query('nombre') nombreDto?: string, // y q su nombre sea igual a DonGato
    // @Query('edad') edadDto?: number,
  ) {
    return this.catService.listar(razaDto, nombreDto);
  }

  // @SkipThrottle({ default: false })
  @Get('detalle/:id') // ok
  detalleDeGato(@Param('id') idDeGato: string) {
    return this.catService.detalleGato(idDeGato);
  }

  @Patch('actualizar/:id') // url, link, enlace
  update(@Param('id') idDeGato: string, @Body() body: CatActualizarEntrada) {
    // captura el valor desde la url
    return this.catService.actualizar(idDeGato, body);
  }

  @Patch('actualizar/muchos/:nombre') // url, link, enlace
  actualizaMuchos(
    @Param('nombre') idDeGato: string,
    @Body() body: CatActualizarEntrada,
  ) {
    // captura el valor desde la url
    return this.catService.actualizar(idDeGato, body);
  }

  @Delete('eliminar/:id') // url
  delete1(@Param('id') gato_a_eliminar: string) {
    return this.catService.eliminar(gato_a_eliminar);
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
