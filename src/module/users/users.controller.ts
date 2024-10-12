import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Malumot yaratish' })
  @Post('add')
  async create(@Body() payload: CreateUserDto) {
    return await this.usersService.createUser(payload);
  }

  @ApiOperation({ summary: 'Barcha malumotlarni olish' })
  @Get()
  findAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Bitta malumot olish' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }

  @ApiOperation({ summary: 'Malumotlari o`zgartirish yaratish' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(Number(id), updateUserDto);
  }

  @ApiOperation({ summary: 'Malumot o`chirish' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
