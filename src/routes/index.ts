import { Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

const router = Router()
const INDEX_FILE_NAME = path.basename(__filename)
const PATH_TO_ROUTES = path.join(__dirname, '/')

const getCleanName = (fileName: string): string => {
  const file = fileName.split('.').shift()
  return file ?? ''
}

readdirSync(PATH_TO_ROUTES)
  .filter((file) => file !== INDEX_FILE_NAME)
  .forEach((file) => {
    import(`${PATH_TO_ROUTES}/${file}`).then((route) => {
      router.use(
        `/${getCleanName(file)}`,
        route.default as Router
      )
    }
    ).catch((_) => {
      throw new Error(`Error importing ${file}`)
    })
  })

export default router
