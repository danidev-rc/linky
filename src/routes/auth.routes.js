import { Router } from 'express'
import {
  register,
  verifyToken,
  login,
  logout,
  profile
} from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.get('/profile', authRequired, profile)
router.post('/logout', authRequired, logout)
router.get('/verify', verifyToken)

export default router
