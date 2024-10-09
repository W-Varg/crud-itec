import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { mascotasservice } from './mascotas.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Modulo de mascotas')
@Controller('')
export class mascotasController {
    constructor(private readonly MascotasObjeto: mascotasservice) { } // inicializar valores

    @Get('listar')
    read() {
        return this.MascotasObjeto.read();
    }

    @Patch('actualizar/:mascota_actual1') // url, link, enlace
    update(@Param('mascota_actual1') nombremascota: string) {
        // captura el valor desde la url
        return this.MascotasObjeto.update(nombremascota);
    }

    //@Delete('eliminar/:gato_a_eliminar') // url
   // delete1(@Param('gato_a_eliminar') gato_a_eliminar: string) {
     //   return this.catObjeto.eliminar(gato_a_eliminar);
    //}

}
