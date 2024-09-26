import { Injectable } from '@nestjs/common';

@Injectable()
export class AvionService {
  
  create(cabereza: string) {
    console.log(cabereza);

    // desde que navegadore viene la peticion???
    return `Avión creado exitosamente`;
  }

  read() {
    return `Se encontro al avion`;
  }

  update() {
    return `El avion fue actualizado`;
  }

  delete() {
    return `El avión fue eliminado`;
  }
}
