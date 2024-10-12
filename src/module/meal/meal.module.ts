import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal } from './model';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { FileModule } from '@file-upload';

@Module({
  imports: [SequelizeModule.forFeature([Meal]), FileModule],
  providers: [MealService],
  controllers: [MealController],
})
export class MealModule {}
