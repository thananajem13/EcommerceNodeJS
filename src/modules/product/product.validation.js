export const createProduct = { 
    body: joi.object().required().keys({ 
        name:joi.string().required()  ,
        amount:joi.number().required().positive().min(1),
        discount:joi.number().required().positive().min(1), 
        subcategoryId: joi.string().required().min(24).max(24), 
        categoryId: joi.string().required().min(24).max(24), 
        brandId: joi.string().required().min(24).max(24), 
        
    }),
headers: joi.object().required().keys({
            authorization: joi.string().required().messages({
                "string.empty": "fill authorization filed, shouldn't be empty",
                "string.base": "authorization must be a string",
                "any.required": "authorization is required"
            })
        }).options({ allowUnknown: true }),

} 
export const updateProduct = {  
    body: joi.object().required().keys({ 
        name:joi.string()   ,
        amount:joi.number().positive().min(1),
        discount:joi.number().positive().min(1), 
        subcategoryId: joi.string().required().min(24).max(24), 
        categoryId: joi.string().required().min(24).max(24), 
        brandId: joi.string().required().min(24).max(24), 
        
    }),
    params: joi.object().required().keys({
        id: joi.string().required().min(24).max(24)
    }),
headers: joi.object().required().keys({
            authorization: joi.string().required().messages({
                "string.empty": "fill authorization filed, shouldn't be empty",
                "string.base": "authorization must be a string",
                "any.required": "authorization is required"
            })
        }).options({ allowUnknown: true }),

} 
export const products = {  
    query: joi.object().required().keys({  
        size:joi.number().positive().required().min(1),
        page:joi.number().positive().required().min(1),  
    }), 

} 
