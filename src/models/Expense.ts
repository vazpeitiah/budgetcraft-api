import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'

export default class Expense extends Model<
InferAttributes<Expense>,
InferCreationAttributes<Expense>
> {
  declare id: CreationOptional<number>
  declare date: Date
  declare account: number
  declare category: number
  declare amount: number
  /* optional prop */
  declare description: string | null
  declare active: CreationOptional<boolean>
}

Expense.init(
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
    account: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category: {
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
    tableName: 'expenses'
  }
)
