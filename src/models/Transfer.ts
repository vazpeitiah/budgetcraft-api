import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'

export default class Transfer extends Model<
InferAttributes<Transfer>,
InferCreationAttributes<Transfer>
> {
  declare id: CreationOptional<number>
  declare date: Date
  declare outputAccount: number
  declare inputAccount: number
  declare amount: number
  declare description: string | null
  declare active: CreationOptional<boolean>
}

Transfer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    outputAccount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    inputAccount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    tableName: 'transfers'
  }
)
