import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z\s]*$/)
    .required()
    .messages({
      'string.base': 'First name must contain only letters',
      'string.empty': 'First name is required',
      'string.min': 'First name must have at least 3 chars',
      'string.max': 'First name cannot be more than 20 chars',
      'string.pattern.base': 'First name must contain only letters',
      'any.required': 'First name is required',
    }),
  lastName: Joi.string()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z\s]*$/)
    .required()
    .messages({
      'string.base': 'Last name must contain only letters',
      'string.empty': 'Last name is required',
      'string.min': 'Last name must have at least 3 chars',
      'string.max': 'Last name cannot be more than 20 chars',
      'string.pattern.base': 'Last name must contain only letters',
      'any.required': 'Last name is required',
    }),
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Email must have a valid format',
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
    }),
  verify_email: Joi.string().valid(Joi.ref('email')).required().messages({
    'any.only': 'Email must match',
  }),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase, lowercase, number and special character',
      'any.required': 'Password is required',
      'string.min': 'Password must have at least 8 chars',
      'string.empty': 'Password is not allowed to be empty',
    }),
  verify_password: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Password must match',
  }),
});

export default userSchema;
