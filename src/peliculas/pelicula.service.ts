import { Injectable } from '@nestjs/common';

@Injectable()
export class PeliculaService {
  listaPeliculas = [];

  create() {
    return `La Pelicula se creo exitosamente`;
  }

  read() {
    return this.listaPeliculas;
  }

  update() {
    return `La Pelicula se actualizo correctamente`;
  }

  delete() {
    return `La Pelicula se elimino correctamente`;
  }
}
