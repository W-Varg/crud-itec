import { Injectable } from '@nestjs/common';
import { motoEntrada } from './dto/data-input';
import { MotoModel } from './dto/moto.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class motoService {
  constructor(
    @InjectModel(MotoModel.name) private motoCollection: Model<MotoModel>,
    private readonly configservice: ConfigService,
  ) {}
  listaMotos = [];
  crear(body: motoEntrada) {
    this.listaMotos.push(body);
    console.log(this.configservice.get('Variable_Motos'));
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
