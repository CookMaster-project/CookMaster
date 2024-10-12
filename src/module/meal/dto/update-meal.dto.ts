import { ApiProperty } from '@nestjs/swagger';
import { UpdateMealRequest } from '../interfaces/update-meal.interface';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { INTEGER } from 'sequelize';

export class UpdateMealDto implements Omit<UpdateMealRequest, 'id'> {
  @ApiProperty({
    type: String,
    example: 'Big Burger',
    required: true,
    description: 'Taom nomi berilishi shart',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Taom description',
    required: true,
    description: 'Taom izohi berilishi shart',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: 'Taom rasmini kiriting',
  })
  image: any;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: true,
    description: 'Taom videosini kiriting',
  })
  video: any;

  @ApiProperty({
    type: INTEGER,
    example: 1,
    required: true,
    description: 'Category id-ni berilishi shart',
  })
  @IsNumberString()
  @IsNotEmpty()
  category_id: number;

  @ApiProperty({
    type: INTEGER,
    example: 1,
    required: true,
    description: 'User id-ni berilishi shart',
  })
  @IsNumberString()
  @IsNotEmpty()
  user_id: number;
}
