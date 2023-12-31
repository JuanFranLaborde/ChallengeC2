import { Router } from 'express'

import productRouter from './products.routes.js'
import cartRouter from './carts.routes.js'
import userRouter from './users.routes.js'
import sessionRouter from './sessions.routes.js'
import messageRouter from './messages.routes.js'

const router = Router()

router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)
router.use('/api/users', userRouter)
router.use('/api/sessions', sessionRouter)
router.use('/api/messages', messageRouter)

export default router