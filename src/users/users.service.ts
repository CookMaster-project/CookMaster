import { Injectable,InternalServerErrorException } from '@nestjs/common';
import { hash } from 'bcrypt'

import { CreateUserRequest } from './interfaces';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) { }


  // User yaratish
  async createUser(newUser: CreateUserRequest): Promise<any> {
    try {
     if(newUser.username.length < 5){
        return 'Username uzunligi kamida 5 ta harf yoki sondan iborat bolishi kerak'
      }
      if(newUser.password.length < 4){
        return 'Password uzunligi kamida 4 ta bolishi kerak'
      }
      const hashed_password = await hash(newUser.password,7)
      return await this.userModel.create({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        username: newUser.username,
        email: newUser.email,
        password: hashed_password
        
      })
      
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }


  // Barcha userlarni korish
  async getAllUsers(): Promise<any>{
    const allUsers = await this.userModel.findAll()
    if(!allUsers.length){
      return 'No users'
    }
    return allUsers
  }

  // Bir dona user ni korish
  async getUserById(id: number): Promise<any>{
    try {
      return await this.userModel.findByPk(id)
      
    } catch (error) {
       throw new 
        InternalServerErrorException(error)
    }
  } 


  // Userni update qilish
  async updateUser(id: number,updatedPayload: UpdateUserDto){
    try {
      const check_user = await this.userModel.findOne({where: {id}})
      if(!check_user){
        return 'User not found!'
      }
      const hashed_password = await hash(updatedPayload.password,7)
      const updateUser =  await this.userModel.update({updatedPayload,password: hashed_password},{where: {id}})
      return {
        statusCode: 200,
        message: 'success',
        data: updateUser
      }
    } catch (error) {
      throw new InternalServerErrorException(error)
      
    }

  }


  
    // Userni ochirish
    async deleteUser(id: Number):Promise<any>{
      try {
        const user = await this.userModel.destroy({where: {id}})
        if(!user){
          return 'User not found!'
        }
        
        return 'User deleted nsuccessfully!'
        
      } catch (error) {
        throw new InternalServerErrorException(error)
        
      }
      
    }

  

}
