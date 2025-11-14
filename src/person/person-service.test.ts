import { PersonService } from './person-service'
import { PersonHttpClient } from './person-http-client'

describe('PersonService tests suite', () => {

    it ('Shoud return a PersonService instance', () => {
        const service = new PersonService(new PersonHttpClient())

        expect(service).toBeInstanceOf(PersonService)
    })
})