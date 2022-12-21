import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { endPoint } from "./order.endPoint.js";
import * as order from './controller/order.js'
import * as orderValidators from './order.validation.js'
import {validation} from './order.validation.js'
const router = Router()




router.post('/',auth(endPoint.create),validation(orderValidators.createOrder) , order.createOrder)




export default router