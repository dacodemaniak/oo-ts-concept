import { Person } from './person'

describe('Person tests suite', () => {
    it ('Should be an instanceof Person', () => {
        const person = new Person('', '', '')
        expect(person).toBeInstanceOf(Person)
    })

    it('Should return Bob Morane', () => {
        const person = new Person('Morane', 'Bob', '')
        person.setName('Morane')

        expect(person.sayHello()).toBe('Bob Morane')
    })

    it('Should return Bob Morane even if redefine', () => {
        const person = new Person('Morane', 'Bob', '')
        person.setName('Morane')
        person.setName('Tartempion')

        expect(person.sayHello()).toBe('Bob Morane')
    })    
})