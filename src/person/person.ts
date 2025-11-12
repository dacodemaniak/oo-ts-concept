export class Person {
    /**
     * nom de la personne
     * @abstract Le nom une fois défini ne peut plus être modifié
     */
    private nom: string = ''

    prenom: string = ''
    adresse: string = ''
    email: string = ''
    telephone: string = ''

    /**
     * Définit le nom de la personne si non défini précédemment
     * @param nom 
     */
    setName(nom: string): void {
        if (this.nom === '')
            this.nom = nom
    }

    sayHello(): string {
        return `${this.prenom} ${this.nom}`
    }
}