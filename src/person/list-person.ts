import { List } from "../core/list/list"
import { Person } from "./person"

export class ListPerson extends List<Person> {

    constructor() {
        super()
        this.list = new Array()
    }

    public add(t: Person): void {
        (this.list as Array<Person>).push(t)
        this.listSize++
    }

    public remove(t: Person): void {
        this.listSize--
        throw new Error("Method not implemented.")
    }

    public size(): number {
        throw new Error("Method not implemented.")
    }
    public reset(): void {
        throw new Error("Method not implemented.")
    }
    public next(): Person | null {
        throw new Error("Method not implemented.")
    }
    public first(): Person {
        throw new Error("Method not implemented.")
    }
    public last(): Person {
        throw new Error("Method not implemented.")
    }

}