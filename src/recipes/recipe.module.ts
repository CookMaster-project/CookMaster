import { Module, forwardRef } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Recipe } from "./models";
import { MealModule } from "src/meal/meal.module";
import { ProductModule } from "src/product";
import { RecipeService } from "./recipe.service";

@Module({
    imports: [SequelizeModule.forFeature([Recipe]),forwardRef(()=> MealModule),forwardRef(()=> ProductModule)],
    providers: [RecipeService],
    exports: [RecipeService]
})
export class RecipeModule{}