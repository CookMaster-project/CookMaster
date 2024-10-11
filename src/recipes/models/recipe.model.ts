import { Model, Table,Column,DataType,ForeignKey,BelongsTo} from "sequelize-typescript";

@Table({})
export class Recipe extends Model{
    @Column({type: DataType.INTEGER,primaryKey: true,autoIncrement: true})
    id: number
        
    @Column({type: DataType.STRING,allowNull: false})
    quentity: string

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