import { Builder } from "./builder"
import { Person } from "./person"

export class PersonBuilder implements Builder<Person> {
    private _nom: string = ''
    private _prenom: string = ''
    private _adresse: string = ''
    private _email: string = ''
    private _telephone: string = ''
    private _genre: string = ''

    public nom(nom: string): PersonBuilder {
        this._nom = nom
        return this // Returns the current instance of PersonBuilder
    }

    public prenom(prenom: string): PersonBuilder {
        this._prenom = prenom
        return this
    }

    public adresse(adresse: string): PersonBuilder {
        this._adresse = adresse
        return this
    }

    public email(email: string): PersonBuilder {
        this._email = email
        return this
    }

    public telephone(telephone: string): PersonBuilder {
        this._telephone = telephone
        return this
    }

    genre(genre: string): PersonBuilder {
        this._genre = genre
        return this
    }

    /**
     * Construire et retourner une instance de Person
     * Lever une exception si : nom ou prenom ou email ne sont pas correct
     */
    public build(): Person {
        let error: string = ''

        if (this._nom == '')
            error += 'Attribut nom incorrect'

        if (this._prenom == '')
            error += '\nAttribut prénom incorrect'

        if (this._email == '')
            error += '\nAttribut email incorrect'

        if (error !== '')
            throw new Error(error)

        const person = new Person(this._nom, this._prenom, this._email)
        person.adresse = this._adresse
        person.telephone = this._telephone
        person.genre = this._genre
        return person
    }
}