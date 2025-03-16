import { DataTypes, Model, Sequelize } from 'sequelize';

export default class Product extends Model {
  declare id: number;
  declare name: string;
  declare price: number;

  static initModel(sequelize: Sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'products',
      }
    );
  }
}
