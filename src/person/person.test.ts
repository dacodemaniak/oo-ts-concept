import { Gender } from './gender'
import { Person } from './person'
import { NameHelloStrategy } from './strategies/name-hello-strategy'
describe('Person tests suite', () => {
    it ('Should be an instanceof Person', () => {
        const person = new Person('', '', '')
        expect(person).toBeInstanceOf(Person)
    })

    it('Should return Bob Morane', () => {
        const person = new Person('Morane', 'Bob', '')
        person.setName('Morane')
        person.genre = Gender.NON_GENRE
        expect(person.sayHello()).toBe('Bob Morane')
    })

    it('Should return Bob Morane even if redefine', () => {
        const person = new Person('Morane', 'Bob', '')
        person.setName('Morane')
        person.setName('Tartempion')
        person.genre = Gender.MASCULIN

        expect(person.sayHello()).toBe('Mr Bob Morane')
    })
    
    it('Should return Morane Bob if nameHelloStrategy is used', () => {
        const person = new Person('Morane', 'Bob', '')
        person.genre = Gender.NON_GENRE
        person.setHelloStrategy(new NameHelloStrategy())

        expect(person.sayHello()).toBe('Morane Bob')
    }) 

    it('Should return Mme Morane Bobbie if nameHelloStrategy is used', () => {
        const person = new Person('Morane', 'Bobbie', '')
        person.genre = Gender.FEMININ
        person.setHelloStrategy(new NameHelloStrategy())

        expect(person.sayHello()).toBe('Mme Morane Bobbie')
    }) 
})