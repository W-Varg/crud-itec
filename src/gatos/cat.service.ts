import { Injectable, NotFoundException } from '@nestjs/common';
import { CatDatosEntrada } from './dto/cat.input.dto';
import { CatModel } from './dto/cat.model';

@Injectable()
export class CatService {
  // crud
  private listaDeGatos: CatModel[] = []; // [{nombre:'garfield'}, {nombre:'pelusa'}, {nombre:'tom'}]

  create(body: CatModel): CatModel {
    this.listaDeGatos.push(body);

    return body;
  }

  listar() {
    return this.listaDeGatos;
  }

  actualizar(id: number, body: CatDatosEntrada) {
    // console.log(typeof id); // string

    const gatoEncontrado = this.listaDeGatos.find(
      (elementoGato) => elementoGato.id === Number(id), // number && number
    );

    // console.log(this.listaDeGatos);
    // console.log(gatoEncontrado);

    if (gatoEncontrado === undefined) {
      throw new NotFoundException('gato no encontrado');
    }

    const posicionGato = this.listaDeGatos.findIndex(
      (elementoGato) => elementoGato.id === Number(id),
    );

    this.listaDeGatos[posicionGato] = {
      ...gatoEncontrado,
      // nomb:''
      // edad:7
      ...body,
      // nombre: 'peludo',
      // edad: 8
    };

    return this.listaDeGatos[posicionGato];
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
