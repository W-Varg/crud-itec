import { ApiProperty } from '@nestjs/swagger';

export class LoginDatosEntradaDto {
  @ApiProperty()
  username: string; // email, o puede ci, o dni, string(usuario), nickname
  @ApiProperty()
  password: string;
}
