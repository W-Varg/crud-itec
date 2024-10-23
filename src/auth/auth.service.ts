import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async loginIngresar(
    username: string,
    pass: string,
  ): Promise<{ accessToken: string }> {
    const user = {
      userId: 1,
      username: 'cesar',
      password: 'cesar_pass',
    };
    // const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { userId: user.userId, username: user.username };

    //retorna
    return {
      accessToken: await this.jwtService.sign(payload),
    };
  }
}
