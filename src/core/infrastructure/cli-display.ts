import { List } from "../list/list";
import { IhmRegistry } from "../registries/ihm_registry";

export abstract class CliDisplay<T> {
    protected dataToDisplay!: T | List<T>
    protected ihmRegistry!: IhmRegistry

    setRegistry(registry: IhmRegistry): void {
        this.ihmRegistry = registry
    }
}