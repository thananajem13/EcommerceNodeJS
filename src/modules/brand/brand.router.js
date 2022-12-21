import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { fileValidation, myMulter } from "../../services/multer.js";
import endPoint from "./brand.endPoint.js";
import * as brand from './controller/brand.js'
import * as brandValidator from './brand.validation.js'
import {validation} from '../../middleware/validation.js'


const router = Router({})

router.post('/', auth(endPoint.add), myMulter(fileValidation.image).single('image'),validation(brandValidator.createBrand), brand.createBrand)

router.get('/',validation(brandValidator.Brands), brand.Brands)

router.put('/:id', auth(endPoint.update), myMulter(fileValidation.image).single('image'),validation(brandValidator.updateBrand), brand.updateBrand)

export default router