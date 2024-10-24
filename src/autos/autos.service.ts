import { Injectable, NotFoundException } from '@nestjs/common';
import { AutosDatosEntrada } from './datos-entrada.imputs';
import { AutosModel } from './dto/autos.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AutosService {
  constructor(
    @InjectModel(AutosModel.name) private autosconexion: Model<AutosModel>,
    private readonly configservice: ConfigService,
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
  async listar() {
    const autos = await this.autosconexion.find();
    console.log(this.configservice.get('WILBER_VARIABLE'));
    const autosFormateados = autos.map((CadaUnoDeLosAutos) => {
      return {
        modelo: CadaUnoDeLosAutos.modelo,
        marca: CadaUnoDeLosAutos.marca,
      };
    });
    return autosFormateados;
  }

  async detalleautos(idDeAuto: string) {
    console.log(idDeAuto);
    const autoencontrado = await this.autosconexion.findById(idDeAuto);
    if (autoencontrado === null) {
      throw new NotFoundException('gato no encontrado');
    }
    return autoencontrado;
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
