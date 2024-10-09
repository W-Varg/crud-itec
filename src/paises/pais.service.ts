import { Injectable } from '@nestjs/common';
import { PaisDatosEntrada } from './datos-entrada.input';

@Injectable()
export class PaisService {
  listaPaises = [];

  create(body: PaisDatosEntrada) {
    this.listaPaises.push(body);
    return `El Pais ${body.nombre} se creo exitosamente`;
  }

  read() {
    return this.listaPaises;
  }

  update() {
    return `el pais fue actualizado`;
  }

  delete() {
    return `el pais fue eliminado`;
  }
}
