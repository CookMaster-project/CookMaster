import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/categories/models';
import { Product } from 'src/product';
import { Recipe } from 'src/recipes/models';
import { User } from 'src/users/models/user.model';

@Table({ tableName: 'meals', timestamps: true })
export class Meal extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({ allowNull: false, type: DataType.STRING })
    name: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    description: string;

    @Column({ type: DataType.STRING })
    video: string;

    @Column({ type: DataType.STRING })
    image: string;

    @ForeignKey(() => Category)
    @Column({ onDelete: 'CASCADE', onUpdate: 'NO ACTION' })
    category_id: number
    @BelongsTo(() => Category)
    category: Category;


    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" })
    user_id: number

    @BelongsTo(() => User)
    user: User

    @HasMany(()=> Recipe)
    recipe: Recipe
}