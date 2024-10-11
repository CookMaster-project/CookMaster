
import { Controller, Post, Body, UploadedFile, UseInterceptors, Get, Param, Put, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos';
import { Category } from './models';
import { fileUpload } from 'src/utils/multer.utils';
import { UpdateCategoryDto } from './dtos/update-category.dtos';

@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) { }

  @Post('add')
  @UseInterceptors(FileInterceptor('image',fileUpload() ))
  async createCategory(
    @Body() payload: CreateCategoryDto,
    @UploadedFile() image: Express.Multer.File
  ): Promise<Category> {
    console.log(image)
    const newCategory = {
      ...payload,
      image: image ? image.filename : null,
    };
    return await this.service.createCategory(newCategory);
  }

  @Get()
  async allCategories(): Promise<Category>{
    return await this.service.getAllCategories()
  }

  @Get(':id')
  singleCategory(@Param('id') id: string){
    return this.service.categoryById(+id)
  }

  @Put(':id')
  updateCategory(@Param('id') id: number,@Body() updatedPayload: UpdateCategoryDto){
    return  this.service.updateCategory(id,updatedPayload)
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number){
    return this.service.deleteCategory(id)
  }
}
