import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from 'src/users/dto/signin-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        public readonly aurthService: AuthService
    ) { }

    @Post('register')
    createUser(@Body() body: CreateUserDto) {
        return this.aurthService.signup(body);
    }

    @Post('login')
    signin(@Body() body: SigninUserDto) {
        return this.aurthService.signin(body);
    }


}
