import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AvionService {
  constructor(private readonly configService: ConfigService) {}

  create(cabereza: string) {
    console.log(cabereza);

    // desde que navegadore viene la peticion???
    return `Avión creado exitosamente`;
  }

  read() {
    console.log('NODE_ENVIROMENT = ', this.configService.get('nodeEnv'));

    return `Se encontro al avion`;
  }

  update() {
    return `El avion fue actualizado`;
  }

  delete() {
    return `El avión fue eliminado`;
  }
}
