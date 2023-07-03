export type Item = {
    id: number,
    name: string,
    brand: string,
    check: boolean
}

export type CreateItem = Omit<Item, "id">;