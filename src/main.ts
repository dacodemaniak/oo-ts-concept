import { IhmRegistry } from "./core/registries/ihm_registry"
import { AllPersons } from "./person/ihm/all_persons"
import { PersonDisplay } from "./person/use-cases/persons-display"

(async () => {

    const registry = IhmRegistry.getRegistry()
    registry.register('all_persons', new AllPersons())
    const cli = new PersonDisplay()
})()