import { Injectable } from '@nestjs/common';
import { CatDatosEntrada } from './datos-entrada.input';

@Injectable()
export class CatService {
  // crud
  listaDeGatos: CatDatosEntrada[] = []; // [{nombre:'garfield'}, {nombre:'pelusa'}, {nombre:'tom'}]

  create(body: CatDatosEntrada) {
    this.listaDeGatos.push(body);
    return `gato ${body.nombre} se creo exitosamente`;
  }

  listar() {
    return this.listaDeGatos;
  }

  actualizar(nombreGato: string) {
    // 'peludo'
    const gatoEncontrado = this.listaDeGatos.find(
      (elementoGato: CatDatosEntrada) => elementoGato.nombre === nombreGato,
    ); // equivanlente a for
    if (gatoEncontrado == null) {
      return `el gato ${nombreGato} no se encontro en la lista`;
    } else {
      const posiciondeGato = this.listaDeGatos.findIndex(
        (elementoGato) => elementoGato.nombre === nombreGato,
      ); // equivanlente a for

      this.listaDeGatos[posiciondeGato] = {
        nombre: nombreGato,
        raza: 'peludo',
        edad: 2,
        esBebe: false,
      };

      return {
        gatos: this.listaDeGatos,
        mensaje: `el gato ${nombreGato} fue actualizado`,
      };
    }
  }

  eliminar(nombreGato: string) {
    const gatoEncontrado = this.listaDeGatos.find(
      (elementoGato) => elementoGato.nombre === nombreGato,
    );

    if (gatoEncontrado === null) {
      return `el gato ${nombreGato} no se encontro en la lista`;
    } else {
      // descarta elementos que no cumplen la condicion
      this.listaDeGatos = this.listaDeGatos.filter((elementoGato) => {
        const esIgual = elementoGato.nombre === nombreGato; // se encontro al gato
        if (esIgual) {
          // este gato se tiene que descartar de la lista
        } else {
          return elementoGato;
        }
      });

      return {
        gatos: this.listaDeGatos,
        mensaje: `el gato ${nombreGato} fue eliminado`,
      };
    }
  }
}
