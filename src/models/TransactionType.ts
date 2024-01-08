import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'
import Category from './Category'

export default class TransactionType extends Model<
InferAttributes<TransactionType>,
InferCreationAttributes<TransactionType>
> {
  declare id: CreationOptional<number>
  declare bussinessKey: string
  declare name: string
  declare active: CreationOptional<boolean>
}

TransactionType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bussinessKey: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
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
    tableName: 'transaction_types'
  }
)

TransactionType.hasMany(Category, {
  sourceKey: 'bussinessKey',
  foreignKey: 'type'
})

Category.belongsTo(TransactionType, {
  foreignKey: 'type',
  targetKey: 'bussinessKey'
})
