import { Ihm } from "../../core/infrastructure/ihm"
import { List } from "../../core/list/list";
import { Person } from "../person";
import { table } from "table";
export class AllPersons implements Ihm<Person> {
    private datas!: List<Person>

    setDatas(datas: Person | List<Person>): void {
        this.datas = datas as List<Person>
    }

    display(): void {
        const data = (this.datas.getList() as Array<Person>)
            .map((person: Person) => {
                return [
                    '',
                    person.getName(),
                    person.getPrenom(),
                    person.getEmail()
                ]
            })
        data.unshift(['', 'Nom', 'Prénom', 'Email'])
        console.log(table(data))
    }

}