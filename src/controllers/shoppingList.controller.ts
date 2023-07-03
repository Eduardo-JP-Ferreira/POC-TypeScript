import { Request, Response } from "express";
import { CreateItem, Item } from "protocols";
import { connection } from "../database/database";
// import * as listRepository from "../repositories/shoppingList-repository"
import * as listServices from "../services/shoppingList-service"

export async function insertItem(req: Request, res: Response){
    const item = req.body as CreateItem;
   
    try {
        listServices.postItem(item)

        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message);
    }

}

export async function listItem(req: Request, res: Response){
    try {
        const result = await listServices.listItens()
        res.send(result.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function updateItem(req: Request, res: Response){
    const item = req.body as CreateItem;
    const {id} = req.params
    const newId = parseInt(id)
    try {
        listServices.updateItem(item, newId)

        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deleteItem(req: Request, res: Response){
    const {id} = req.params
    const newId = parseInt(id)
    try {
        listServices.deleteItem(newId)

        res.sendStatus(200)
    } catch (error) {
        res.status(500).send(error.message);
    }
}