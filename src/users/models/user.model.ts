import { Column, DataType, Model, Table,HasMany } from "sequelize-typescript";
import { CreateUserRequest } from "../interfaces";
import { Recipe } from "src/recipes/models";
import { Meal } from "src/meal/model";

@Table({tableName: 'users',timestamps: true})
export class User extends Model{
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

    @HasMany(() => Meal, { onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
    meals: Meal[];

    // @HasMany(() => Recipe, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    // recipes: Recipe[];

}
