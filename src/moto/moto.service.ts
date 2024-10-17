import { Injectable } from '@nestjs/common';
import { motoEntrada } from './dto/data-input';
import { MotoModel } from './dto/moto.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class motoService {
  constructor(
    @InjectModel(MotoModel.name) private motoCollection: Model<MotoModel>,
  ) {}
  listaMotos = [];
  crear(body: motoEntrada) {
    this.listaMotos.push(body);
    return `moto ${body.marca} creada exitosamente`;
  }
  listar() {
    return this.listaMotos;
  }
  actualizar() {
    return `moto actualizada`;
  }
  borrar() {
    return `moto eliminada`;
  }
}
