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
  private listaAutos: AutosModel[] = [];

  async create(body: AutosDatosEntrada): Promise<AutosModel> {
    //this.listaDeAutos.push(body);
    console.log(body);
    const autoACrear = new this.autosconexion({
      modelo: body.Modelo,
      marca: body.Marca,
      anio: body.Año,
    });
    const autocreado = await autoACrear.save(); // linea que almacena en la db
    return autocreado;
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
