import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { endPoint } from "./wishlist.endpoint.js";
import * as wishlist  from './controller/wishlist.js'
import * as wishlistValidators  from './wishlist.validation.js'
import {validation} from '../../middleware/validation.js'
const router = Router({ mergeParams: true })



router.patch("/add" , auth(endPoint.add),validation(wishlistValidators.add)  ,  wishlist.add )
router.patch("/remove" , auth(endPoint.remove) ,validation(wishlistValidators.remove)  ,  wishlist.remove )









export default router
