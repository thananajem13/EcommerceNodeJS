export const createOrder = {
  
    body: joi.object().required().keys({
        name:Joi.array().items(
            Joi.object({
                productId:joi.string().required().min(24).max(24),
                quantity: joi.number().positive().min(1)
            })
          )
        ,
        couponId:joi.string().required().min(24).max(24)
        
    }),
headers: joi.object().required().keys({
            authorization: joi.string().required().messages({
                "string.empty": "fill authorization filed, shouldn't be empty",
                "string.base": "authorization must be a string",
                "any.required": "authorization is required"
            })
        }).options({ allowUnknown: true }),

} 