import { List } from "../list/list";

export interface Ihm<T> {
    setDatas(datas: T | List<T>): void
}