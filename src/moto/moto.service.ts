import { Injectable } from '@nestjs/common';
import { motoEntrada } from './dto/data-input';
@Injectable()
export class motoService {
  listaMotos = [];
  crear(body: motoEntrada) {
    this.listaMotos.push(body);
    return `moto ${body.marca} creada exitosamente`;
  }
  listar() {
    return this.listaMotos;
  }
  actualizar() {
    return `moto actualizada`;
  }
  borrar() {
    return `moto eliminada`;
  }
}
