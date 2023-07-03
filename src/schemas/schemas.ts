import Joi from "joi";
import { CreateItem } from "protocols";

export const itemSchema = Joi.object<CreateItem>({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    check: Joi.boolean().required()
})