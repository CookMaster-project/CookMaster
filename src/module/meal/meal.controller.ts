import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { Meal } from './model/meal.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateMealDto } from './dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@ApiTags('Meals')
@Controller('meals')
export class MealController {
  #_service: MealService;
  // #_uploadService: UploadService

  constructor(service: MealService) {
    this.#_service = service;
  }

  @ApiOperation({ summary: 'Barcha malumotlarni olish' })
  @Get()
  async getAllMeal(): Promise<Meal[]> {
    return await this.#_service.getAllMeal();
  }

  // @ApiOperation({ summary: 'Malumot yaratish' })
  // @Post('/add')
  // async createMeal(@Body() createMealPayload: CreateMealDto): Promise<void> {
  //   return await this.#_service.createUser(createMealPayload);
  // }

  @ApiOperation({ summary: 'Malumotlani o`zgartirish' })
  @Put('/update/:mealId')
  async updateMeal(
    @Body() meal: UpdateMealDto,
    @Param('mealId', ParseIntPipe) id: number,
  ): Promise<string> {
    await this.#_service.updateMeal(meal, id);
    return 'updated';
  }

  @ApiOperation({ summary: 'Malumotni o`chirish' })
  @Delete('/delete/:mealId')
  async deleteMeal(@Param('mealId', ParseIntPipe) id: number): Promise<string> {
    await this.#_service.deleteMeal(id);
    return 'deleted';
  }
}
