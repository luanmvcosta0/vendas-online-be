import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return {
      ...dto,
      password: undefined,
    };
  }
}
