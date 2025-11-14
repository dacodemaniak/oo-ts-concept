import { HttpClient } from "../core/http-client/http-client";
import { ListPerson } from "../person/list-person";
import { Person } from "../person/person";
import { PersonBuilder } from "../person/person-builder";
import { Fetchable } from "./../core/interfaces/fetchable";
import { Mutable } from "./../core/interfaces/mutable";
import { List } from "./../core/list/list";

export class PersonService implements Mutable<Person>, Fetchable<Person> {
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

  async findAll(): Promise<List<Person>> {
    const result: List<Person> = new ListPerson();
    const persons = await this.httpClient.get<Array<Person>>('/persons')
    persons.forEach((person: any) => {
        const builder = new PersonBuilder()
        builder
            .nom(person.nom)
            .prenom(person.prenom)
            .adresse(person.adresse)
            .genre(person.genre)
            .email(person.email)
            .telephone(person.telephone)
        result.add(builder.build())
    })
    return result;
  }
}