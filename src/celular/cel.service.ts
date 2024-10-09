import { Injectable } from '@nestjs/common';
import { celDatosEntrada } from './dto/data-input';
@Injectable()
export class celService {
  listaCel: celDatosEntrada[] = [];
  create(body: celDatosEntrada) {
    this.listaCel.push(body);
    return `Celular ${body.marca} creado exitosamente`;
  }
  list() {}
  update(marcaCel: string) {
    const celEncontrado = this.listaCel.find(
      (elementoCel: celDatosEntrada) => elementoCel.marca === marcaCel,
    ); // equivanlente a for
    if (celEncontrado == null) {
      return `El Celular ${marcaCel} no se encontro en la lista`;
    } else {
      const posicionDeCel = this.listaCel.findIndex(
        (elementoCel) => elementoCel.marca === marcaCel,
      ); // equivanlente a for

      this.listaCel[posicionDeCel] = {
        marca: marcaCel,
        modelo: 'XIAOMI',
        gama: 'Alta',
        precio: 1500,
      };
      return {
        celulares: this.listaCel,
        mensaje: `El Celular de marca ${marcaCel} fue actualizado`,
      };
    }
  }
  //delete(cel_a_eliminar: string) {}
}
