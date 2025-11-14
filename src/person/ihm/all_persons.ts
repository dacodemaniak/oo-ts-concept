import { Ihm } from "../../core/infrastructure/ihm"
import { List } from "../../core/list/list";
import { Person } from "../person";

export class AllPersons implements Ihm<Person> {
    private datas!: List<Person>

    setDatas(datas: Person | List<Person>): void {
        this.datas = datas as List<Person>
        this.displayList()
    }

    private displayList(): void {
        let list = 'id      | nom               | prenom                | email             |\n';

        (this.datas.getList() as Array<Person>).forEach((person: Person) => {
            list += `       | ${person.getName()}       | ${person.getPrenom()}     | ${person.getEmail()}      |\n`     
        });
        console.log(list)
    }

}