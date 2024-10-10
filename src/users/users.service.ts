import { Injectable } from '@nestjs/common';
import {hash} from 'bcrypt'
import { CreateUserRequest } from './interfaces';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(private userModel: typeof User){}
  async createUser(newUser: CreateUserRequest): Promise<any> {
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
  }

}
