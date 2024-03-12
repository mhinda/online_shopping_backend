import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Serialize } from 'src/interceptors/custom-serializer.interceptor';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly repo: Repository<User>) { }

  create(name: string, email: string, password: string) {
    const user = this.repo.create({ name, email, password });

    return this.repo.save(user);
  }

  findBy(email: string) {
    return this.repo.findBy({ email });
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    return this.repo.find();
  }

  findOneBy(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOneBy(id);
    if (!user) throw new NotFoundException('User not found')

    Object.assign(user, updateUserDto);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOneBy(id);
    if (!user) throw new NotFoundException('User not found')

    return this.repo.remove(user);
  }
}
