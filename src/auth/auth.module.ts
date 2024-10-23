import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { miKeyPublic } from './auth.key';
// import { jwtConstants } from './constants';

@Global()
@Module({
  imports: [
    // UsersModule,
    JwtModule.register({
      global: true,
      secret: miKeyPublic,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
