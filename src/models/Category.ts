import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'

export default class Category extends Model<
InferAttributes<Category>,
InferCreationAttributes<Category>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare type: string
  declare active: CreationOptional<boolean>
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    tableName: 'categories'
  }
)
