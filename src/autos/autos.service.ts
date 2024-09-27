import { Injectable } from '@nestjs/common';
import { AutosDatosEntrada } from './datos-entrada.imputs';

@Injectable()
export class AutosService {
  // crud
  listaDeAutos = [];
  create(body: AutosDatosEntrada) {
    this.listaDeAutos.push(body);
    return `Auto ${body.Marca} se creo exitosamente`;
  }
  listar() {
    return this.listaDeAutos;
  }
  read() {
    return `Se encontro al Auto`;
  }

  update() {
    return `El Auto fue actualizado`;
  }

  delete() {
    return `El Auto fue eliminado`;
  }
}
