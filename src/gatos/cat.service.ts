import { Injectable } from '@nestjs/common';
import { CatDatosEntrada } from './datos-entrada.input';

@Injectable()
export class CatService {
  // crud
  listaDeGatos = [];

  create(body: CatDatosEntrada) {
    this.listaDeGatos.push(body);
    return `gato ${body.nombre} se creo exitosamente`;
  }

  listar() {
    return this.listaDeGatos;
  }

  update() {
    return `el gato fue actualizado`;
  }

  delete() {
    return `el gato fue eliminado`;
  }
}
