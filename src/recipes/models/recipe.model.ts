import { Model, Table,Column,DataType,ForeignKey,BelongsTo} from "sequelize-typescript";
import { Meal } from "src/meal/model";
import { Product } from "src/product";
import { User } from "src/users/models/user.model";

@Table({})
export class Recipe extends Model{
    @Column({type: DataType.INTEGER,primaryKey: true,autoIncrement: true})
    id: number
        
    @Column({type: DataType.STRING,allowNull: false})
    quentity: string

    @ForeignKey(()=> Meal)
    @Column({type: DataType.INTEGER,allowNull: false,onDelete: "CASCADE",onUpdate: "NO ACTION"})
    meal_id: number

    @BelongsTo(()=> Meal)
    meal: Meal

    @ForeignKey(()=> Product)
    @Column({type: DataType.INTEGER,allowNull: false,onDelete: "CASCADE",onUpdate: "NO ACTION"})
    product_id: number

    @BelongsTo(()=> Product)
    product: Product


}