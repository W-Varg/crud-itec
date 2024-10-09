import { Module } from '@nestjs/common';
import { mascotasController } from './mascotas.controller';
import { mascotasservice } from './mascotas.service';

@Module({
    imports: [],
    controllers: [mascotasController],
    providers: [mascotasservice],
})
export class MascotasModule { }
