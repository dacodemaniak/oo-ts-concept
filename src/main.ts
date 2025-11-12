import { Person } from "./person/person"

(() => {
    const person = new Person()
    // Définir les valeurs des attributs de personne
    person.setName("Morane")
    person.prenom = "Bob"
    person.adresse = "95 rue du Monde"
    person.telephone = "06 xxxxxx"
    person.email = "bob@bob.com"
    person.setName('Tartempion')

    console.log(person.sayHello())
})()