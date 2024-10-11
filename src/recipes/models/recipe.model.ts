import { Model, Table,Column,DataType,ForeignKey,BelongsTo} from "sequelize-typescript";
import { Category } from "src/categories/models";

@Table({})
export class Recipe extends Model{
    @Column({type: DataType.INTEGER,primaryKey: true,autoIncrement: true})
    id: number

    @Column({type: DataType.STRING,allowNull: false})
    name: string

    @Column({type: DataType.TEXT,allowNull: true})
    description: string

    @Column({type: DataType.STRING})
    picture_url: string

    @Column({type: DataType.STRING})
    video_url: string

    @Column({type: DataType.STRING})
    preparation_time: string

    @Column({type: DataType.STRING})
    cooking_time: string

    @Column({type: DataType.SMALLINT})
    serving: number

    // @ForeignKey(()=> Category)
    // @Column({type: DataType.INTEGER,allowNull: false,onDelete: "CASCADE",onUpdate: "NO ACTION"})
    // category_id: number

    // @BelongsTo(()=> Category)
    // category: Category

    // @ForeignKey(()=> Category)
    // @Column({type: DataType.INTEGER,allowNull: false,onDelete: "CASCADE",onUpdate: "NO ACTION"})
    // owner_id: number

    // @BelongsTo(()=> Category)
    // owner: Category




}