import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './routes'
import sequelize from './utils/db'

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(express.json())
app.use(cors())
app.use(router)

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`)
  sequelize.authenticate().then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection to database has been established successfully.')

    sequelize.sync({ force: true }).then(() => {
      // eslint-disable-next-line no-console
      console.log('All models were synchronized successfully.')
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Unable to synchronize models:', error)
    })
  }).catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', error)
  })
})
