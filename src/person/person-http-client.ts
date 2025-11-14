import { HttpClient } from "../core/http-client/http-client";
import { Person } from "./person";

export class PersonHttpClient extends HttpClient<Person> {
  constructor() {
    super('http://127.0.0.1:3000');
  }
}