// import { InjectModel } from '@nestjs/sequelize';
// import { Meal } from './model/meal.model';
// import { CreateMealRequest, UpdateMealRequest } from './interfaces';
// import { UploadService } from 'src/upload';
// import { InternalServerErrorException } from '@nestjs/common';

// export class MealService {
//  #_uploadedService
//   constructor(
//     @InjectModel(Meal) private mealModel: typeof Meal,
//     uploadService: UploadService,
//   ) {
//     this.#_uploadedService = uploadService
//   }

//   async getAllMeal(): Promise<Meal[]> {
//     return await this.mealModel.findAll();
//   }

//   async create(payload: CreateMealRequest): Promise<any> {
//     try {
//       const image = await this.#_uploadedService.uploadFile({  
//         file: payload.image,
//         destination: 'uploads/meal/images'
//       });
//       const video = await this.#_uploadedService.uploadFile({
//         file: payload.video,
//         destination: 'uploads/meal/videos'
//       })
//       const new_store = await this.mealModel.create({// create qilinganda storeModel deb ishlatilingan

//         name: payload.name,
//         image: image.imageUrl,
//         description: payload.description,
//         video: video.imageUrl,
//         category_id: payload.category_id,
//         user_id: payload.user_id

//       });
//       return {
//         message: 'New meal added success',
//         data: new_store,
//       };
//     } catch (error) {
//       throw new InternalServerErrorException(error);
//     }
//   }


// }
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Meal } from './model/meal.model';
import { CreateMealRequest, UpdateMealRequest } from './interfaces';
import { UploadService } from 'src/upload';

@Injectable()
export class MealService {
    #_uploadedService: UploadService;

    constructor(
        @InjectModel(Meal) private mealModel: typeof Meal,
        uploadService: UploadService,
    ) {
        this.#_uploadedService = uploadService;
    }

    async getAllMeal(): Promise<Meal[]> {
        return await this.mealModel.findAll();
    }

    async getMealById(id: number): Promise<Meal> {
        const meal = await this.mealModel.findByPk(id);
        if (!meal) {
            throw new InternalServerErrorException(`Meal with id ${id} not found`);
        }
        return meal;
    }

    async create(payload: CreateMealRequest): Promise<any> {
        try {
            const imageUrl = payload.image ? await this.#_uploadedService.uploadFile({  
                file: payload.image,
                destination: 'uploads/meal/images'
            }) : null;

            const videoUrl = payload.video ? await this.#_uploadedService.uploadFile({
                file: payload.video,
                destination: 'uploads/meal/videos'
            }) : null;

            const newMeal = await this.mealModel.create({
                name: payload.name,
                image: imageUrl ? imageUrl.imageUrl : null, 
                description: payload.description,
                video: videoUrl ? videoUrl.imageUrl : null, 
                category_id: payload.category_id,
                user_id: payload.user_id
            });
            return {
                message: 'New meal added successfully',
                data: newMeal,
            };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    async updateMeal(id: number, updatedPayload: UpdateMealRequest): Promise<any> {
        const meal = await this.mealModel.findByPk(id);
        if (!meal) {
            throw new InternalServerErrorException(`Meal with id ${id} not found`);
        }
    
       
        if (updatedPayload.image) {
            if (meal.image) {
                await this.#_uploadedService.removeFile({ fileName: meal.image });
            }
        }
    
     
        if (updatedPayload.video) {
            if (meal.video) {
                await this.#_uploadedService.removeFile({ fileName: meal.video });
            }
        }
    
        let updatedImageUrl = null;
        let updatedVideoUrl = null;
    
        if (updatedPayload.image) {
            const updatedImage = await this.#_uploadedService.uploadFile({
                file: updatedPayload.image,
                destination: 'uploads/meal/images',
            });
            updatedImageUrl = updatedImage.imageUrl;
        }
    
        if (updatedPayload.video) {
            const updatedVideo = await this.#_uploadedService.uploadFile({
                file: updatedPayload.video,
                destination: 'uploads/meal/videos',
            });
            updatedVideoUrl = updatedVideo.imageUrl; 
        }
    
     
        await meal.update({
            name: updatedPayload.name,
            description: updatedPayload.description,
            image: updatedImageUrl || meal.image, 
            video: updatedVideoUrl || meal.video,
            user_id: updatedPayload.user_id,
            category_id: updatedPayload.category_id,
        });
    
        return {
            message: 'Product updated successfully!',
            data: meal, 
        };
    }
    
    
    
    async deleteMeal(id: number): Promise<void> {
        const meal = await this.mealModel.findByPk(id);
        if (!meal) {
            throw new InternalServerErrorException(`Meal with id ${id} not found`);
        }
        await meal.destroy();
    }
}
    
