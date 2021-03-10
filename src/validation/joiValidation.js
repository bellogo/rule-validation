import Joi from "joi";

const joiValidate = object => {
  const schema = Joi.object({
    rule: Joi.object().required().keys({
      field: Joi.string().required().messages({
        "any.required": "field is required.",
        "string.base": "field should be a string."
      }),
      condition: Joi.string().required().valid("eq", "neq", "gt", "gte", "contains").messages({
        "any.required": "condition is required.",
        "string.base": "condition should be a string.",
        "any.only": "rule.condition must be one of [eq, neq, gt, gte, contains]"
      }),
      condition_value: Joi.required().messages({
        "any.required": "condition_value is required."
      })
    }).messages({
      "any.required": "rule is required.",
      "object.unknown": "Invalid JSON payload passed.",
      "object.base": "rule should be an object."
    }),
    data: Joi.alternatives().try(Joi.object(), Joi.string(), Joi.array()).required().messages({
      "any.required": "data is required.",
      "alternatives.types": "data must be one of [object, string, array]"
    })
  }).messages({
    "object.unknown": "Invalid JSON payload passed.",
  }).options({ abortEarly: true });
  return schema.validate(object);
};

export default joiValidate;
