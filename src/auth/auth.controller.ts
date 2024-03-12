import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        public readonly aurthService: AuthService
    ) { }

    @Post('register')
    async createUser(@Body() body: CreateUserDto) {
        const token = await this.aurthService.signup(body);
        return token;
    }

    
}
