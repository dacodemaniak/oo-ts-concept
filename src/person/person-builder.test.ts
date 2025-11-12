import { PersonBuilder } from './person-builder'
import { Person } from './person'
import { Gender } from './gender'

describe('PersonBuilder test suite', () => {
    let uncompletePerson: any
    let completePerson: any
    let builder: PersonBuilder
    beforeEach(() => {
        uncompletePerson = {
            nom: '',
            prenom: 'Bob',
            email: '',
            telephone: '06xxxxxx',
            adresse: 'Test',
            genre: Gender.NON_GENRE
        }
        completePerson = {
            nom: 'Morane',
            prenom: 'Bob',
            email: 'bob@test.com',
            telephone: '06xxxxxx',
            adresse: 'Test',
            genre: Gender.MASCULIN
        }
    })

    it('Should raise an exception with uncomplete objet', () => {
        builder = new PersonBuilder()
        builder
            .nom(uncompletePerson.nom)
            .prenom(uncompletePerson.prenom)
            .adresse(uncompletePerson.adresse)
            .email(uncompletePerson.email)
            .telephone(uncompletePerson.telephone)
            .genre(uncompletePerson.genre)

        expect(() => builder.build()).toThrow()
    })

    it('Should return a Person instance with complete objet', () => {
        builder = new PersonBuilder()
        builder
            .nom(completePerson.nom)
            .prenom(completePerson.prenom)
            .adresse(completePerson.adresse)
            .email(completePerson.email)
            .telephone(completePerson.telephone)

        expect(builder.build()).toBeInstanceOf(Person)
    })
})