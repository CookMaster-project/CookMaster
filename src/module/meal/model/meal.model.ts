import { Column, DataType, Model, Table } from 'sequelize-typescript';

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

  @Column({ type: DataType.INTEGER, allowNull: false })
  category_id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: any;
}
