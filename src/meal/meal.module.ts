import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal } from './model';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { UploadModule } from 'src/upload';
import { UsersModule } from 'src/users/users.module';
import { ProductModule } from 'src/product';
import { CategoryModule } from 'src/categories/category.module';
import { RecipeModule } from 'src/recipes/recipe.module';
// import { User } from 'src/users/models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Meal]),UploadModule,forwardRef(()=> UsersModule),forwardRef(()=> CategoryModule),forwardRef(()=> RecipeModule)],
  providers: [MealService],
  controllers: [MealController],
  exports: [MealService]
})
export class MealModule {}