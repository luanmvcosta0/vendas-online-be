import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(dto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;

    const passwordHashed = await hash(dto.password, saltOrRounds);

    const user: User = {
      ...dto,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(user);

    return user;
  }

  async findAllUsers(): Promise<User[]> {
    return await this.users;
  }
}
