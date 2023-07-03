import { connection } from "../database/database";
import { CreateItem, Item } from "protocols";

export function postItem(item: CreateItem){
    return connection.query(`
    INSERT INTO list (name, brand, "check") VALUES ($1, $2, $3)
     `, [item.name, item.brand, item.check])
}

export function listItens(){
    return connection.query(`SELECT * FROM list`)
}

export function updateItem(item: CreateItem, id: number){
    return connection.query(`
    UPDATE list SET name=$1, brand=$2, "check"=$3 WHERE id=$4
     `, [item.name, item.brand, item.check, id])
}

export function deleteItem(id: number){
    return connection.query(`
    DELETE FROM list WHERE id = $1
     `, [id])
}