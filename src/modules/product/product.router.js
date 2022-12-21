import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { fileValidation, myMulter } from "../../services/multer.js";
import endPoint from "./product.endPoint.js";
import * as product from './controller/product.js'
import * as productValidator from './product.validation.js'
import {validation} from '../../middleware/validation.js'
import wishlistRouter from '../wishlist/wishlist.router.js'
import reviewRouter from '../reviews/reviews.router.js'

const router = Router({})

router.use('/:productId/wishList'  , wishlistRouter)
router.use('/:productId/review'   , reviewRouter)


router.post('/', auth(endPoint.add), myMulter(fileValidation.image).array('images' , 5),validation(productValidator.createProduct), product.createProduct)
router.put('/:id', auth(endPoint.update), myMulter(fileValidation.image).array('images' , 5),validation(productValidator.updateProduct), product.updateProduct)


router.get('/',validation(productValidator.products), product.products)





export default router