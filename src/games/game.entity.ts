import { Table, Column, Model, DataType, Length } from 'sequelize-typescript';

@Table
export class Game extends Model {
  @Length({ min: 1, max: 30 })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  year: number;

  @Length({ min: 10 })
  @Column({
    type: DataType.STRING(400),
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageFileName: string;
}
