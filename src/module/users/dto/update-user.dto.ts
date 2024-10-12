import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEmail,
  Max,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    type: String,
    example: 'Kim',
    required: true,
    description: 'User kiritilishi shart',
  })
  @IsString()
  @IsNotEmpty()
  @Min(3)
  first_name: string;

  @ApiProperty({
    type: String,
    example: 'Tan',
    required: true,
    description: 'Last_name berilishi shart',
  })
  @IsString()
  @IsOptional()
  @Min(3)
  last_name: string;

  @ApiProperty({
    type: String,
    example: 'Username',
    required: true,
    description: 'Usernamei kiriting',
  })
  @IsString()
  @IsNotEmpty()
  @Min(5)
  username: string;

  @ApiProperty({
    type: String,
    example: 'kimTan@mgail.com',
    required: true,
    description: 'Email kiriting',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    example: '12345',
    required: true,
    description: 'Password berilishi shart',
  })
  @IsString()
  @Min(4)
  @Max(8)
  password: string;
}
