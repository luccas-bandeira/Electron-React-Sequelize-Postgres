import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  telefone: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
export default class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public telefone!: string;

  static initModel(sequelize: Sequelize) {
    User.init(
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'users',
      }
    );
  }
}

export type { UserCreationAttributes };