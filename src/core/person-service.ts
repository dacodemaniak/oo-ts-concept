import { ListPerson } from "../person/list-person";
import { Person } from "../person/person";
import { PersonBuilder } from "../person/person-builder";
import { Fetchable } from "./interfaces/fetchable";
import { Mutable } from "./interfaces/mutable";
import { List } from "./list/list";

class PersonService implements Mutable<Person>, Fetchable<Person> {
  private httpClient: HttpClient<Person>;

  constructor(httpClient: HttpClient<Person>) {
    this.httpClient = httpClient;
  }

  add(person: Person): Person {
    this.httpClient.post<Person>('/persons', person)
      .then(result => {
        console.log('Person added:', result);
        return result;
      })
      .catch(error => {
        console.error('Error adding person:', error);
        throw error;
      });
    return person;
  }

  update(person: Person): Person {
    this.httpClient.put<Person>('/persons', person)
      .then(result => {
        console.log('Person updated:', result);
        return result;
      })
      .catch(error => {
        console.error('Error updating person:', error);
        throw error;
      });
    return person;
  }

  delete(person: Person): void {
    this.httpClient.delete('/persons', person.getEmail());
  }

  findOne(id: string): Person | null {
    let result: Person | null = null;
    this.httpClient.get<Person>(`/persons/${id}`)
      .then(person => {
        result = person;
      })
      .catch(error => {
        console.error('Error finding person:', error);
      });
    return result;
  }

  findAll(): List<Person> {
    const result: List<Person> = new ListPerson();
    this.httpClient.get<Array<Person>>('/persons')
      .then(persons => {
        persons.forEach((person: Person) => {
            const builder = new PersonBuilder()
            builder
                .nom(person.getName())
                .prenom(person.getPrenom())
                .adresse(person.adresse)
                .genre(person.genre)
                .email(person.getEmail())
                .telephone(person.telephone)
            result.add(builder.build())
        })
      })
      .catch(error => {
        console.error('Error finding all persons:', error);
      });
    return result;
  }
}