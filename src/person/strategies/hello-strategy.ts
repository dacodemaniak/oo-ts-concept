import { Person } from "../person";

export interface HelloStrategy {
    displayPerson(person: Person): string
}