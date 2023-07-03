import { Router } from "express";
import * as shoppingList from "../controllers/shoppingList.controller"
import schemaValidation from "../middlewares/schemaValidation";
import { itemSchema } from "../schemas/schemas";

const shoppingListRouter = Router();

shoppingListRouter.get("/list", shoppingList.listItem);
shoppingListRouter.post("/item", schemaValidation(itemSchema), shoppingList.insertItem);
shoppingListRouter.put("/item/:id", schemaValidation(itemSchema), shoppingList.updateItem);
shoppingListRouter.delete("/item/:id", shoppingList.deleteItem);
export default shoppingListRouter;