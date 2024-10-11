import { Column, DataType, Model, Table,HasMany } from "sequelize-typescript";
import { CreateUserRequest } from "../interfaces";
import { Recipe } from "src/recipes/models";

@Table({tableName: 'users',timestamps: true})
export class User extends Model{
    static includes(newUser: CreateUserRequest) {
      throw new Error('Method not implemented.');
    }
    @Column({type: DataType.INTEGER,primaryKey: true,autoIncrement: true})
    id: number

    @Column({type: DataType.STRING,allowNull: false})
    first_name: string

    @Column({type: DataType.STRING,allowNull: true})
    last_name: string

    @Column({type: DataType.STRING,allowNull: false,unique: true})
    username: string

    @Column({type: DataType.STRING,allowNull: false,unique: true})
    email: string

    @Column({type: DataType.STRING,allowNull: false,unique: true})
    password: string

    // @HasMany(()=> Recipe)
    // recipes: Recipe[]

}
