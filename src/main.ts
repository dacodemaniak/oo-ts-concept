import { Person } from "./person/person"

(() => {
    const person = new Person('Morane', 'bob', 'bob@morane.com')
    // Définir les valeurs des attributs de personne
    person.setName("Morane")
    person.adresse = "95 rue du Monde"
    person.telephone = "06 xxxxxx"
    person.setName('Tartempion')

    console.log(person.sayHello())
})()