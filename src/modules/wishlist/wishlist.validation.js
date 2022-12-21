export const add = {
    params: joi.object().required().keys({
        productId: joi.string().required().min(24).max(24),

    }),
    headers: joi.object().required().keys({
        authorization: joi.string().required().messages({
            "string.empty": "fill authorization filed, shouldn't be empty",
            "string.base": "authorization must be a string",
            "any.required": "authorization is required"
        })
    }).options({ allowUnknown: true }),

}
export const remove = {
    params: joi.object().required().keys({
        productId: joi.string().required().min(24).max(24),

    }),
    headers: joi.object().required().keys({
        authorization: joi.string().required().messages({
            "string.empty": "fill authorization filed, shouldn't be empty",
            "string.base": "authorization must be a string",
            "any.required": "authorization is required"
        })
    }).options({ allowUnknown: true }),

}


