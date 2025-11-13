export interface Mutable<T> {
    add(t: T): T
    update(t: T): T
    delete(t: T): void
}