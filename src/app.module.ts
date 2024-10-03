import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisModule } from './paises/pais.module';
import { CatModule } from './gatos/cat.module';
import { AvionModule } from './avion/avion.module';
import { motoModule } from './moto/moto.module';
import { AutosModule } from './autos/autos.module';
import { celModule } from './celular/cel.module';

@Module({
  imports: [
    CatModule,
    AvionModule,
    PaisModule,
    motoModule,
    AutosModule,
    celModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
