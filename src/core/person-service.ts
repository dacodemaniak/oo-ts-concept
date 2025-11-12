export class PersonService {
    private static instance: PersonService | undefined = undefined

    status: boolean

    private constructor() {
        this.status = false
    }

    public toggleStatus(): void {
        this.status = !this.status
    }

    public static getInstance() {
        if (PersonService.instance === undefined) {
            PersonService.instance = new PersonService()
        }
        return PersonService.instance
    }
}