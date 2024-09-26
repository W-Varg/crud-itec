import { Injectable } from '@nestjs/common';

@Injectable()
export class PaisService {
  create(cabecera: string) {
    console.log(cabecera);
    return `pais creado exitosamente`;
  }

  read() {
    return `se encontro al pais`;
  }

  update() {
    return `el pais fue actualizado`;
  }

  delete() {
    return `el pais fue eliminado`;
  }
}
