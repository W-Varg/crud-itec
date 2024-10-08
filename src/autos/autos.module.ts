import { Module } from '@nestjs/common';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';

@Module({
  imports: [],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
