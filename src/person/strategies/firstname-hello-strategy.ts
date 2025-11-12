import { Person } from "../person";
import { HelloStrategy } from "./hello-strategy";

export class FirstNameHelloStrategy implements HelloStrategy {
    displayPerson(person: Person): string {
        return `${person.getPrenom()} ${person.getName()}`
    }
    
}