import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { UploadService } from '../upload';
import { RecipeModule } from 'src/recipes/recipe.module';
// import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Product]),forwardRef(()=> RecipeModule)],
  providers: [UploadService, ProductService],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
