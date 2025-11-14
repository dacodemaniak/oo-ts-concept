import { List } from "../list/list"

export interface Fetchable<T> {
    findOne(id: string): T | null
    findAll(): Promise<List<T>>
}