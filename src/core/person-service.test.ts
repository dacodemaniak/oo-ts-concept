import { PersonService } from './person-service'

describe('PersonService tests suite', () => {

    it ('Shoud return a PersonService instance', () => {
        const service = PersonService.getInstance()

        expect(service).toBeInstanceOf(PersonService)
    })

    it('Should have only one instance', () => {
        const service = PersonService.getInstance()
        const otherService = PersonService.getInstance()

        expect(service).toStrictEqual(otherService)
    })

    it ('Shoud return a PersonService instance', () => {
        const service = PersonService.getInstance()

        expect(service.status).toBeFalsy()

        const otherService = PersonService.getInstance()

        // Change status of service
        service.toggleStatus() // status is true

        expect(otherService.status).toBeTruthy()
    })
})