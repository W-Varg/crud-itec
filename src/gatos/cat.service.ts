import { Injectable, NotFoundException } from '@nestjs/common';
import { CatActualizarEntrada, CatDatosEntrada } from './dto/cat.input.dto';
import { CatModel } from './dto/cat.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as libBcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(CatModel.name) private catCollection: Model<CatModel>,
    private readonly configService: ConfigService,
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

    const datoHasheado = await libBcrypt.hash(body.raza, 10);

    // this.catModel.insertMany([{ nombre: 'gato1' }, { nombre: 'gato2' }]);
    // this.catModel.find();

    const gatoCreado = await gatoACrear.save(); // linea q almacena en la db

    gatoCreado.raza = datoHasheado;

    return gatoCreado;
  }

  // ac, bc
  async listar(razaVar: string, nombreDto: string) {
    console.log('NODE_ENVIROMENT = ', this.configService.get('nodeEnv'));
    // filtrar gato por raza y que su nombre contenga la palabra Gat
    const expresionQueDebeCumplir = new RegExp(nombreDto, 'i');
    const gatos = await this.catCollection.find({
      raza: razaVar,
      nombre: expresionQueDebeCumplir, // RECODE , avanzar expresiones regular coomo concepto
    }); // filtra automaticamente

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
    const gatoEncontrado = await this.catCollection.findById(id);
    if (gatoEncontrado === null) {
      throw new NotFoundException('gato no encontrado');
    }

    return gatoEncontrado;
  }

  async actualizar(id: string, body: CatActualizarEntrada) {
    const gatoEncontrado = await this.catCollection.findById(id);

    if (gatoEncontrado === null) {
      throw new NotFoundException(
        'gato no encontrado, o no existe en la base de datos',
      );
    }
    gatoEncontrado.nombre = body.nombre ?? undefined;
    gatoEncontrado.raza = body.raza ?? undefined;
    gatoEncontrado.fechaActualizacion = new Date();
    gatoEncontrado.usuarioActualizadorId = 1053;
    // gatoEncontrado.edad = body.edad; // estan como referencia ya q no existe en la class
    // gatoEncontrado.esBebe = body.esBebe; // no existe en el class
    // gatoEncontrado.estaAutorizado = body.estaAutorizado; // no existe en el class
    const gatoGuardado = await gatoEncontrado.save();

    return gatoGuardado;
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
