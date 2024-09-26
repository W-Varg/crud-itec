import { Injectable } from '@nestjs/common';
@Injectable()
export class motoService {
  crear() {
    return `moto creada`;
  }
  leer() {
    return `se encontro la marca`;
  }
  actualizar() {
    return `moto actualizada`;
  }
  borrar() {
    return `moto eliminada`;
  }
}
