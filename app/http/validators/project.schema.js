const createError = require("http-errors");
const Joi = require("joi");
const { MongoIDPattern } = require("../../../utils/constants");

const addProjectSchema = Joi.object({
  title: Joi.string()
    .required()
    .min(3)
    .max(50)
    .error(createError.BadRequest("عنوان محصول صحیح نمیباشد")),
  description: Joi.string()
    .required()
    .error(createError.BadRequest("توضیحات ارسال شده صحیح نمیباشد")),
  tags: Joi.array()
    .min(0)
    .max(20)
    .error(createError.BadRequest("برچسب ها نمیتواند بیشتر از 20 ایتم باشد")),
  category: Joi.string()
    .required()
    .regex(MongoIDPattern)
    .error(createError.BadRequest("دسته بندی مورد نظر  صحیح نمی باشد")),
  budget: Joi.number().error(
    createError.BadRequest("قیمت وارد شده صحیح نمیباشد")
  ),
  deadline: Joi.date()
    .required()
    .error(createError.BadRequest("ددلاین پروژه را وارد کنید")),
  budgetCurrency: Joi.string().required(),
});

// const addProjectSchema = Joi.object({
//   title: Joi.string().min(3).max(30).required().messages({
//     "string.empty": "عنوان محصول نمی‌تواند خالی باشد",
//     "string.min": "عنوان محصول باید حداقل 3 کاراکتر باشد",
//     "string.max": "عنوان محصول نباید بیشتر از 30 کاراکتر باشد",
//     "any.required": "عنوان محصول الزامی است",
//   }),
//   description: Joi.string().required().messages({
//     "string.empty": "توضیحات نمی‌تواند خالی باشد",
//     "any.required": "توضیحات الزامی است",
//   }),
//   tags: Joi.array().max(20).messages({
//     "array.max": "برچسب‌ها نمی‌توانند بیشتر از 20 آیتم باشند",
//   }),
//   category: Joi.string().pattern(MongoIDPattern).required().messages({
//     "string.pattern.base": "دسته‌بندی صحیح نمی‌باشد",
//     "any.required": "دسته‌بندی الزامی است",
//   }),
//   budget: Joi.number().messages({
//     "number.base": "قیمت باید عدد باشد",
//   }),
//   deadline: Joi.date().required().messages({
//     "date.base": "ددلاین پروژه تاریخ صحیحی نیست",
//     "any.required": "ددلاین پروژه الزامی است",
//   }),
// });

module.exports = {
  addProjectSchema,
};
