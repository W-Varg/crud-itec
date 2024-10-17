import { Injectable, NotFoundException } from '@nestjs/common';
import { CatDatosEntrada } from './dto/cat.input.dto';
import { CatModel } from './dto/cat.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(CatModel.name) private catCollection: Model<CatModel>,
  ) {}

  // crud
  private listaDeGatos: CatModel[] = []; // [{nombre:'garfield'}, {nombre:'pelusa'}, {nombre:'tom'}]

  async create(body: CatDatosEntrada): Promise<CatModel> {
    // this.listaDeGatos.push(body);
    // aun no se ha guardado
    const gatoACrear = new this.catCollection({
      nombre: body.nombre,
      raza: body.raza,
      edad: body.edad,
      esBebe: body.esBebe,
      estaAutorizado: body.estaAutorizado,

      fechaCreacion: new Date(),
      usuarioCreadorId: 1050,
      // fechaActualizacion: new Date(),
      // usuarioActualizadorId: 107,
    });

    // this.catModel.insertMany([{ nombre: 'gato1' }, { nombre: 'gato2' }]);
    // this.catModel.find();

    const gatoCreado = await gatoACrear.save(); // linea q almacena en la db

    return gatoCreado;
  }

  async listar() {
    const gatos = await this.catCollection.find();

    // mapeamos el listado de gatos para que devuelva un listado de gatos formateados
    const gatosFormateados = gatos.map((cadaUnoDeLosGatos) => {
      return {
        id: cadaUnoDeLosGatos.id,
        nombre: cadaUnoDeLosGatos.nombre,
        raza: cadaUnoDeLosGatos.raza,
      };
    });
    return gatosFormateados;
  }

  async detalleGato(id: string) {
    console.log(id);
    const gatoEncontrado = await this.catCollection.findById(id);
    if (gatoEncontrado === null) {
      throw new NotFoundException('gato no encontrado');
    }

    return gatoEncontrado;
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

  // 670f09e6420bbeedde6ea331
  async eliminar(idDeGato: string) {
    const gatoEncontrado = await this.catCollection.find({
      _id: idDeGato,
    });

    if (gatoEncontrado === null) {
      return `el gato ${idDeGato} no se encontro en la lista`;
    } else {
      // descarta elementos que no cumplen la condicion
      // this.listaDeGatos = this.listaDeGatos.filter((elementoGato) => {
      //   const esIgual = elementoGato.nombre === idDeGato; // se encontro al gato
      //   if (esIgual) {
      //     // este gato se tiene que descartar de la lista
      //   } else {
      //     return elementoGato;
      //   }
      // });

      await this.catCollection.deleteOne({ _id: idDeGato });

      return {
        gatos: await this.catCollection.find(),
        mensaje: `el gato ${idDeGato} fue eliminado`,
      };
    }
  }
}
