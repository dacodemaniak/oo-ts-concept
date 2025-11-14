import { Ihm } from "../infrastructure/ihm"

export class IhmRegistry<T> {
    private static instance: IhmRegistry<any> | undefined = undefined

    private registry: Map<string, Ihm<T>> = new Map()

    private constructor() {}

    static getRegistry<T>(): IhmRegistry<T> {
        if (IhmRegistry.instance === undefined)
            IhmRegistry.instance = new IhmRegistry()

        return IhmRegistry.instance
    }

    register(slug: string, ihm: Ihm<T>): void {
        if (!this.registry.has(slug)) {
            console.log('register ', slug)
            this.registry.set(slug, ihm)
        }
    }

    getIhm(slug: string): any {
        const ihm = this.registry.get(slug)
        if (ihm !== undefined) return ihm

        throw new Error(`No registry with slug ${slug} was found`)
    }
}