import { Comparable } from "../core/interfaces/comparable"
import { FirstNameHelloStrategy } from "./strategies/firstname-hello-strategy"
import { HelloStrategy } from "./strategies/hello-strategy"

export class Person implements Comparable<Person> {
    /**
     * nom de la personne
     * @abstract Le nom une fois défini ne peut plus être modifié
     */
    private nom: string = ''
    private email: string = ''

    private prenom: string = ''
    adresse: string = ''
    
    telephone: string = ''

    public genre: string = ''
    
    private naissance: Date = new Date()

    /**
     * La stratégie à utiliser pour dire bonjour
     */
    private helloStrategy: HelloStrategy = new FirstNameHelloStrategy()

    constructor(nom: string, prenom: string, email: string) {
        this.nom = nom
        this.prenom = prenom
        this.email = email
    }

    /**
     * Définit le nom de la personne si non défini précédemment
     * @param nom 
     */
    setName(nom: string): void {
        if (this.nom === '')
            this.nom = nom
    }

    getName(): string {
        return this.nom
    }

    getPrenom(): string {
        return this.prenom
    }

    getEmail(): string {
        return this.email
    }

    setNaissance(date: Date): void {
        this.naissance = date
    }

    getNaissance(): Date {
        return this.naissance
    }

    setHelloStrategy(strategy: HelloStrategy): void {
        this.helloStrategy = strategy
    }

    public compareTo(person: Person): number {
        if (this.naissance > person.naissance) return 1
        if (this.naissance < person.naissance) return -1
        return 0
    }
    
    sayHello(): string {
        return this.helloStrategy.displayPerson(this)
    }
}