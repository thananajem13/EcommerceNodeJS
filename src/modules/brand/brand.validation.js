export const createBrand = {

    body: joi.object().required().keys({
        name: joi.string().min(2).max(20).required().messages({
            'any.required': "userName field is required",
            'any.empty': "empty userName is not acceptable"
        }),
        
    }),
headers: joi.object().required().keys({
            authorization: joi.string().required().messages({
                "string.empty": "fill authorization filed, shouldn't be empty",
                "string.base": "authorization must be a string",
                "any.required": "authorization is required"
            })
        }).options({ allowUnknown: true }),

}
export const Brands = {

    query: joi.object().required().keys({
        page: joi.number().positive().min(1),
        size: joi.number().positive().min(1)

    })
}
export const updateBrand = {
    params: joi.object().required().keys({
        id: joi.string().required().min(24).max(24),

    }),
    body: joi.object().required().keys({
        name: joi.string().min(2).max(20).required().messages({
            'any.required': "userName field is required",
            'any.empty': "empty userName is not acceptable"
        }),
        
    }),
}