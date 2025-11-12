import { Person } from "../person";
import { HelloStrategy } from "./hello-strategy";

export class NameHelloStrategy implements HelloStrategy {
    displayPerson(person: Person): string {
        return `${person.getName()} ${person.getPrenom()}`
    }
    
}