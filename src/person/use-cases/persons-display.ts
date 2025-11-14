import { AfterInit } from "../../core/infrastructure/after_init";
import { CliDisplay } from "../../core/infrastructure/cli-display";
import { Ihm } from "../../core/infrastructure/ihm";
import { IhmRegistry } from "../../core/registries/ihm_registry";
import { AllPersons } from "../ihm/all_persons";
import { ListPerson } from "../list-person";
import { Person } from "../person";
import { PersonHttpClient } from "../person-http-client";
import { PersonService } from "./../person-service"


export class PersonDisplay extends CliDisplay<Person> implements AfterInit {
    private service: PersonService = new PersonService(new PersonHttpClient())

    constructor() {
        super()
        this.afterInit()
    }

    async afterInit() {
        this.dataToDisplay = await this.service.findAll()
        const ihm: Ihm<Person> = IhmRegistry.getRegistry().getIhm('all_persons')
        ihm.setDatas(this.dataToDisplay)
    }
}