import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'

export default class Wallet extends Model<
InferAttributes<Wallet>,
InferCreationAttributes<Wallet>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare balance: number
}

Wallet.init(
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
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize
  }
)
