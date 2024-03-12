import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    salt_or_rounds: number = 10;

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async signup({ name, email, password }) {
        const users = await this.usersService.findBy(email);

        if (users.length) {
            throw new BadRequestException('Email is in use');
        }

        const hash_password = await bcrypt.hash(password, this.salt_or_rounds)

        const user = await this.usersService.create(name, email, hash_password)

        const payload = { sub: user.id, name: user.name, email: user.email };
        const access_token = await this.jwtService.signAsync(payload);

        return { access_token };

    }


    async signin({ email, password}) {
        const [user] = await this.usersService.findBy(email);
        if (!user) {
            throw new UnauthorizedException('Invalid username or password')
        }

        const passwordIsValid = await user.validatePassword(password);

        if (!passwordIsValid) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const payload = { sub: user.id, name: user.name, email: user.email };
        const access_token = await this.jwtService.signAsync(payload);

        return { access_token };
        
    }
}