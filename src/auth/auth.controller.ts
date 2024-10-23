import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  //   UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDatosEntradaDto } from './dto/auth.datos-entrada';
import { AuthGuard } from './auth.guard';

@ApiTags('modulo de autenticación')
@Controller('authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDatosEntradaDto) {
    return this.authService.loginIngresar(
      signInDto.username,
      signInDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiBearerAuth() // decorador que habilita el candado en el swagger
  getProfile(@Request() req) {
    console.log('executado con exito');

    return req.user;
  }
}
