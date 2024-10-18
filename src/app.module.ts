import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisModule } from './paises/pais.module';
import { CatModule } from './gatos/cat.module';
import { AvionModule } from './avion/avion.module';
import { motoModule } from './moto/moto.module';
import { AutosModule } from './autos/autos.module';
import { PeliculaModule } from './peliculas/pelicula.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { celModule } from './celular/cel.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crud_itec'), // url de conexion
    ThrottlerModule.forRoot([{ ttl: 1000, limit: 1 }]),
    CatModule,
    // AvionModule,
    // PaisModule,
    motoModule,
    // AutosModule,
    // MascotasModule,
    // PeliculaModule,
    // celModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
