import { Router } from "express";
import {auth}  from '../../middleware/auth.js'
import * as coupon from './controller/coupon.js'
import * as couponValidators from './coupon.validation.js'
import {validation} from './coupon.validation.js'
import { endPoint } from "./coupon.endPoint.js";

const router = Router()




router.post('/', auth(endPoint.createCoupon),validation(couponValidators.createCoupon) , coupon.createCoupon)
router.put('/:id', auth(endPoint.updateCoupon),validation(couponValidators.updateCoupon) , coupon.updateCoupon)
router.delete('/:id', auth(endPoint.deleteCoupon) ,validation(couponValidators.deleteCoupon), coupon.deleteCoupon)






export default router