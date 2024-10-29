import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AutosService } from './autos.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AutosDatosEntrada } from './datos-entrada.imputs';
import { FileInterceptor } from '@nestjs/platform-express';
import { SubirFotoDtoauto } from './dto/autos.input.dto';
import * as pathFile from 'path';
import * as fsFile from 'fs';

@ApiTags('MODULO DE AUTOS')
@Controller('Autos')
export class AutosController {
  constructor(private readonly autosObjeto: AutosService) {}

  @Post('subir/foto')
  @UseInterceptors(FileInterceptor('file'))
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
  uploadFile(
    @Body() body: SubirFotoDtoauto,
    @UploadedFile() file: Express.Multer.File, // Cambiado de @UploadedFiles a @UploadedFile
  ) {
    // Verificar que el archivo fue recibido
    if (!file) {
      return 'No se recibió ningún archivo';
    }

    console.log(file); // Para ver la información del archivo

    // Definir el directorio de guardado
    const lugarDeGuardado = pathFile.join(__dirname, '../../fotos-autos');

    // Crear el directorio si no existe
    if (!fsFile.existsSync(lugarDeGuardado)) {
      fsFile.mkdirSync(lugarDeGuardado, { recursive: true }); // Agregar { recursive: true } para crear subdirectorios si es necesario
    }

    // Definir el nombre del archivo
    const nombreArchivo = `${new Date().getTime()} - ${file.originalname}`;

    // Guardar el archivo en el directorio especificado
    const rutaArchivoFinal = pathFile.join(lugarDeGuardado, nombreArchivo);
    fsFile.writeFileSync(rutaArchivoFinal, file.buffer); // Guardar el archivo

    console.log(`Archivo guardado en: ${rutaArchivoFinal}`);
    return 'El archivo fue subido con éxito';
  }

  @Post('insertar')
  create(@Body() body: AutosDatosEntrada) {
    return this.autosObjeto.create(body);
  }

  @Get('listar')
  async read() {
    const autos = await this.autosObjeto.listar();
    return autos.map((cadaUnoDeLosAutos) => ({
      marca: cadaUnoDeLosAutos.marca,
      modelo: cadaUnoDeLosAutos.modelo,
    }));
  }

  @Get('detalle/:id')
  detalleDeAuto(@Param('id') idDeAuto: string) {
    return this.autosObjeto.detalleautos(idDeAuto);
  }

  @Patch('Actualizar')
  update() {
    return 'El auto fue actualizado';
  }

  @Delete('Eliminar')
  delete() {
    return 'El auto fue eliminado';
  }
}
