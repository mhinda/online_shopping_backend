import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { promisify } from "util";
import { scrypt as _scrypt, randomBytes } from "crypto";

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async signup(name: string, email: string, password: string) {
        const users = await this.usersService.findBy(email);

        if (users.length) {
            throw new BadRequestException('Email is in use');
        }

        const salt = randomBytes(8).toString('hex');

        const hash = (await scrypt(password, salt, 32)) as Buffer;

        const result = salt + '.' + hash.toString('hex');

        const user = await this.usersService.create(name, email, result)

        return user;
    }

    async signin(email: string, password: string) {
        const [user] = await this.usersService.findBy(email);
        if (!user) {
            throw new NotFoundException('User not found')
        }

        const [salt, storedHash] = user.password.split('.');

        const hash = (await scrypt(password, salt, 32)) as Buffer;

        if (storedHash !== hash.toString('hex')) {
            throw new BadRequestException('Invalid password');
        }

        return user
    }
}