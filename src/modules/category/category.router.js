import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { fileValidation, myMulter } from "../../services/multer.js";
import endPoint from "./category.endPoint.js";
import * as category from './controller/category.js'
import * as validatorCategory from './category.validation.js'
import subcategoryRouter from "../subcategory/subcategory.router.js";
import {validation} from './category.validation.js'
const router = Router()


router.use('/:categoryId/subCategory', subcategoryRouter)

router.post('/', auth(endPoint.add), myMulter(fileValidation.image).single('image'),validation(validatorCategory.createCategory), category.createCategory)

router.put('/:id', auth(endPoint.update), myMulter(fileValidation.image).single('image'),validation(validatorCategory), category.updateCategory)

router.get('/',validation(validatorCategory.getAllCategories), category.getAllCategories)

router.get('/:id',validation(validatorCategory.getCategoryByID), category.getCategoryByID)





export default router