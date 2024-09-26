import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  // crud

  create(cabereza: string) {
    console.log(cabereza);

    // desde que navegadore viene la peticion???
    return `gato creado exitosamente`;
  }

  read() {
    return `se encontro al gato`;
  }

  update() {
    return `el gato fue actualizado`;
  }

  delete() {
    return `el gato fue eliminado`;
  }
}
