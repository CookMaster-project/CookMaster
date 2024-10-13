import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './models/user.model'; 
// import { Meal } from 'src/meal/model';
import { MealModule } from 'src/meal/meal.module';

@Module({
  imports: [SequelizeModule.forFeature([User]),forwardRef(()=> MealModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
