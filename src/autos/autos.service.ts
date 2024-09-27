import { Injectable } from '@nestjs/common';

@Injectable()
export class AutosService {
  create(cabereza: string) {
    console.log(cabereza);

    // desde que navegadore viene la peticion???
    return `Auto creado exitosamente`;
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
