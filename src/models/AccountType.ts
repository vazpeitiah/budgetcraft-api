import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'
import Account from './Account'

export default class AccountType extends Model<
InferAttributes<AccountType>,
InferCreationAttributes<AccountType>
> {
  declare id: CreationOptional<number>
  declare bussinessKey: string
  declare name: string
  declare active: CreationOptional<boolean>
}

AccountType.init(
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
    tableName: 'account_types'
  }
)

AccountType.hasMany(Account, {
  sourceKey: 'bussinessKey',
  foreignKey: 'type'
})

Account.belongsTo(AccountType, {
  foreignKey: 'type',
  targetKey: 'bussinessKey'
})
