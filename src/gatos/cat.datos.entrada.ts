import { ApiProperty } from '@nestjs/swagger';

export class CatBody {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  raza: string;
}
