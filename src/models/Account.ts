import {
  Model,
  DataTypes,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional
} from 'sequelize'
import sequelize from '../utils/db'
import Expense from './Expense'
import Income from './Income'
import Transfer from './Transfer'

export default class Account extends Model<
InferAttributes<Account>,
InferCreationAttributes<Account>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare type: string
  declare includeInTotal: boolean
  declare active: CreationOptional<boolean>
}

Account.init(
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
    includeInTotal: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    tableName: 'accounts'
  }
)

Account.hasMany(Expense, { foreignKey: 'account', sourceKey: 'id' })
Expense.belongsTo(Account, { foreignKey: 'account', targetKey: 'id' })

Account.hasMany(Income, { foreignKey: 'account', sourceKey: 'id' })
Income.belongsTo(Account, { foreignKey: 'account', targetKey: 'id' })

Account.hasMany(Transfer, { foreignKey: 'outputAccount', sourceKey: 'id' })
Transfer.belongsTo(Account, { foreignKey: 'outputAccount', targetKey: 'id' })
Account.hasMany(Transfer, { foreignKey: 'inputAccount', sourceKey: 'id' })
Transfer.belongsTo(Account, { foreignKey: 'inputAccount', targetKey: 'id' })
