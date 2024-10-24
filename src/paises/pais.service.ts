import { Injectable } from '@nestjs/common';
import { PaisDatosEntrada } from './datos-entrada.input';
import { PaisModel } from './pais.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaisService {
  constructor(private readonly configService: ConfigService) {}

  listaPaises: PaisModel[] = [];

  create(body: PaisModel) {
    return this.listaPaises.push(body);
  }

  read() {
    console.log('NODE_ENVIROMENT = ', this.configService.get('nodeEnv'));

    return this.listaPaises;
  }

  update(nombrePais: string) {
    const paisEncontrado = this.listaPaises.find(
      (p: PaisDatosEntrada) => p.nombre === nombrePais,
    );
    if (paisEncontrado == null) {
      return `El Pais ${nombrePais} no se encontró en la lista`;
    } else {
      const posicionPais = this.listaPaises.findIndex(
        (p) => p.nombre === nombrePais,
      );

      this.listaPaises[posicionPais] = {
        nombre: nombrePais,
        continente: 'Asia',
        idioma: 'Japones',
        capital: 'Tokio',
        poblacion: 24586,
        presidente: 'Masashi Kishimoto',
      };

      return {
        paises: this.listaPaises,
        mensaje: `El Pais ${paisEncontrado.nombre} fue actualizado`,
      };
    }
  }

  delete(nombrePais: string) {
    const paisEncontrado = this.listaPaises.find(
      (elementoPais) => elementoPais.nombre === nombrePais,
    );
    if (paisEncontrado == null) {
      return `El Pais ${nombrePais} no se encontró en la lista`;
    } else {
      this.listaPaises = this.listaPaises.filter((elementoPais) => {
        const esIgual = elementoPais.nombre === nombrePais;
        if (!esIgual) {
          return elementoPais;
        }
      });

      return {
        paises: this.listaPaises,
        mensaje: `El Pais ${paisEncontrado.nombre} fue actualizado`,
      };
    }
  }
}
