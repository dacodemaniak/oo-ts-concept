export abstract class List<T> {
    protected list: Array<T> | Set<T> | Map<number, T> = new Array()

    public listSize: number = 0

    public getList(): Array<T> | Set<T> | Map<number, T> {
        return this.list
    }

    public abstract add(t:T): void
    public abstract remove(t: T): void
    public abstract size(): number
    public abstract reset(): void
    public abstract next(): T | null
    public abstract first(): T
    public abstract last(): T
}