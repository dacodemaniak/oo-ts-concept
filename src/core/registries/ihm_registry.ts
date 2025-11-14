import { Ihm } from "../infrastructure/ihm"

export class IhmRegistry<T> {
    private registry: Map<string, Ihm<T>> = new Map()

    register(slug: string, ihm: Ihm<T>): void {
        if (!this.registry.has(slug)) {
            this.registry.set(slug, ihm)
        }
    }

    getIhm(slug: string): any {
        const ihm = this.registry.get('slug')
        if (ihm !== undefined) return ihm

        throw new Error(`No registry with slug ${slug} was found`)
    }
}