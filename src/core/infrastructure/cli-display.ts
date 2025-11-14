import { List } from "../list/list";
export abstract class CliDisplay<T> {
    protected dataToDisplay!: T | List<T>

}