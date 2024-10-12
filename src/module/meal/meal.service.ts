import { InjectModel } from '@nestjs/sequelize';
import { Meal } from './model/meal.model';
import { CreateMealRequest } from './interfaces';
import { UpdateMealRequest } from './interfaces/update-meal.interface';
import { CreateMealDto } from './dto';

export class MealService {
  constructor(
    @InjectModel(Meal) private mealModel: typeof Meal,
    // private readonly uploadService,
  ) {}

  async getAllMeal(): Promise<Meal[]> {
    return await this.mealModel.findAll();
  }

  // async create(
  //   createStoreDto: CreateMealDto,
  //   file: Express.Multer.File,
  // ): Promise<object> {
  //   try {
  //     const image = await this.fileService.uploadFile(file);
  //     const exist_phone = await this.storeModel.findOne({
  //       where: { phone: createStoreDto.phone },
  //     });
  //     if (exist_phone) {
  //       throw new ConflictException('phone number already exist');
  //     }
  //     const new_store = await this.storeModel.create({
  //       ...createStoreDto,
  //       image,
  //     });
  //     return {
  //       message: 'New store added success',
  //       data: new_store,
  //     };
  //   } catch (error) {
  //     throw new InternalServerErrorException(error);
  //   }
  // }

  // async createUser(payload: CreateMealRequest): Promise<void> {
  //   const meal = await this.mealModel.create({
  //     name: payload.name,
  //     description: payload.description,
  //     video: payload.video,
  //     user_id: payload.user_id,
  //     category_id: payload.category_id,
  //   });
  // }

  async updateMeal(payload: UpdateMealRequest, id: number): Promise<string> {
    await this.mealModel.update({ ...payload }, { where: { id } });
    return;
  }

  async deleteMeal(id: number): Promise<string> {
    try {
      const result = await this.mealModel.destroy({ where: { id } });
      if (result === 0) {
        throw new Error('Meal not found');
      }
      return 'deleted';
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
