export const createCategory = {
    body: joi.object().required().keys({
        name: joi.string().required()
    }),
    headers: joi.object().required().keys({
        authorization: joi.string().required().messages({
            "string.empty": "fill authorization filed, shouldn't be empty",
            "string.base": "authorization must be a string",
            "any.required": "authorization is required"
        })
    }).options({ allowUnknown: true }),

}
export const updateCategory = {
    body: joi.object().required().keys({
        name: joi.string().required()
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
export const getAllCategories = {
    query: joi.object().required().keys({
        page: joi.number().positive().min(1),
        size: joi.number().positive().min(1)
    }), 

}  
export const getCategoryByID = {
    params: joi.object().required().keys({
        id: joi.string().required().min(24).max(24)
    }),

}  