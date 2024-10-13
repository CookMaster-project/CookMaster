import { Module, forwardRef } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./models";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { MealModule } from "src/meal/meal.module";

@Module({
    imports: [SequelizeModule.forFeature([Category]),forwardRef(()=> MealModule)],
    providers: [CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService]
})
export class CategoryModule{}