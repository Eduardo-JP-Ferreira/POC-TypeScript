import { CreateItem, Item } from "protocols";
import * as listRepository from "../repositories/shoppingList-repository"

export function postItem(item: CreateItem){
    return listRepository.postItem(item)
}

export function listItens(){
    return listRepository.listItens()
}

export function updateItem(item: CreateItem, id: number){
    return listRepository.updateItem(item, id)
}

export function deleteItem(id: number){
    return listRepository.deleteItem(id)
}