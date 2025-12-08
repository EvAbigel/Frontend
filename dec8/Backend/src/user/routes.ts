import { Router } from "express"
import { register, signIn } from "../user/userController"

const router: Router = Router()
router.post('/user/signin', signIn);
router.post('/user/register', register);

export default router