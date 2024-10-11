
import { Model,Table,Column,DataType,HasMany } from "sequelize-typescript";
import { Recipe } from "src/recipes/models";


@Table({tableName: 'category',timestamps: true})
export class Category extends Model{
    @Column({type: DataType.INTEGER,primaryKey: true,autoIncrement: true})
    id: number

    @Column({type: DataType.STRING,allowNull: true})
    image: string

    @Column({type: DataType.STRING,allowNull: false,unique: true})
    name: string

   

}

 // @HasMany(()=> Recipe)
    // recipes: Recipe[]