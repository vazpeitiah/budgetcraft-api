import Account from '../models/Account'
import AccountType from '../models/AccountType'
import Category from '../models/Category'
import TransactionType from '../models/TransactionType'

export const createInitialData = async (): Promise<void> => {
  const accountTypes = await AccountType.findAll()
  const transactionTypes = await TransactionType.findAll()
  const accounts = await Account.findAll()
  if (accountTypes.length === 0) {
    await AccountType.bulkCreate([
      { bussinessKey: 'CSH', name: 'Efectivo' },
      { bussinessKey: 'BNK', name: 'Banco' },
      { bussinessKey: 'CC', name: 'Tarjeta de Crédito' },
      { bussinessKey: 'OTR', name: 'Otro' }
    ])
  }
  if (transactionTypes.length === 0) {
    await TransactionType.bulkCreate([
      { bussinessKey: 'INC', name: 'Ingreso' },
      { bussinessKey: 'EXP', name: 'Egreso' },
      { bussinessKey: 'TRF', name: 'Transferencia' }
    ])
  }
  if (accounts.length === 0) {
    await Account.bulkCreate([
      {
        name: 'Dinero en Efectivo',
        type: 'CSH',
        includeInTotal: true
      }
    ])
  }
  if (accountTypes.length === 0) {
    await Category.bulkCreate([
      {
        name: 'Salario',
        type: 'INC'
      },
      {
        name: 'Otros Ingresos',
        type: 'INC'
      },
      {
        name: 'Vivienda',
        type: 'EXP'
      },
      {
        name: 'Transporte',
        type: 'EXP'
      },
      {
        name: 'Supermercado',
        type: 'EXP'
      },
      {
        name: 'Resturantes',
        type: 'EXP'
      },
      {
        name: 'Snacks',
        type: 'EXP'
      },
      {
        name: 'Entretenimiento',
        type: 'EXP'
      },
      {
        name: 'Salud y belleza',
        type: 'EXP'
      },
      {
        name: 'Otros Gastos',
        type: 'EXP'
      }
    ])
  }
}
