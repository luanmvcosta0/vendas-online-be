import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.createUser(dto);
  }
}
