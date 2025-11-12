import { Gender } from "../gender";
import { Person } from "../person";
import { HelloStrategy } from "./hello-strategy";

export class NameHelloStrategy implements HelloStrategy {
    displayPerson(person: Person): string {
        let prefix = (person.genre === Gender.NON_GENRE) 
                    ? ''
                    : (person.genre === Gender.MASCULIN)
                        ? 'Mr'
                        : 'Mme'

        return `${prefix} ${person.getName()} ${person.getPrenom()}`.trim()
    }
    
}