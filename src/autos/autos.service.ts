import { Injectable } from '@nestjs/common';
import { AutosDatosEntrada } from './datos-entrada.imputs';
import { AutosModel } from './dto/autos.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AutosService {
  constructor(
    @InjectModel(AutosModel.name) private autosconexion: Model<AutosModel>,
  ) {}
  // crud
  listaDeAutos = [];
  create(body: AutosDatosEntrada) {
    //this.listaDeAutos.push(body);
    this.autosconexion
      .insertMany([
        { modelo: 'jimmy', marca: 'Nissan', anio: 2007 },
        { modelo: 'patrol', marca: 'Nissan', anio: 2010 },
        { modelo: 'condor', marca: 'Nissan', anio: 2007 },
      ])
      .then(() => {
        console.log('insertado');
      });

    const createdAutos = new this.autosconexion(body);
    return createdAutos.save();

    return `Auto ${body.Marca} se creo exitosamente`;
  }
  listar() {
    return this.autosconexion.find();
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
