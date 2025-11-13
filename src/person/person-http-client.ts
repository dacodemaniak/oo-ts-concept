import { Person } from "./person";

class PersonHttpClient extends HttpClient<Person> {
  constructor() {
    super('http://127.0.0.1:3000');
  }
}