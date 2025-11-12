import { Person } from "../person";
import { HelloStrategy } from "./hello-strategy";

export class NameHelloStrategy implements HelloStrategy {
    displayPerson(person: Person): string {

        return `${person.genre} ${person.getName()} ${person.getPrenom()}`.trim()
    }
    
}