export const createCoupon = {
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
export const updateCoupon = {
    body: joi.object().required().keys({
        name: joi.string() ,
        amount: joi.number().positive().min(1)
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
export const deleteCoupon = {
     
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