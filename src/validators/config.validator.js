const Joi = require("joi");

const createConfigSchema = Joi.object({
  key: Joi.string().min(3).max(50).required(),
  value: Joi.string().min(1).required(),
  description: Joi.string().allow("", null),
});

const updateConfigSchema = Joi.object({
  key: Joi.string().min(3).max(50),
  value: Joi.string().min(1),
  description: Joi.string().allow("", null),
}).min(1);

module.exports = {
  createConfigSchema,
  updateConfigSchema,
};
