# Kit de démarrage TypeScript POO

Kit de démarrage pour illustrer les concepts de programmation orientée objet en TypeScript.

## Prérequis

- Node.js 20.19.0
- npm

## Installation

```bash
npm install
```

## Scripts disponibles

### Développement

```bash
npm run dev
```
Lance l'application en mode développement avec rechargement automatique.

### Build

```bash
npm run build
```
Compile le projet TypeScript et génère les fichiers dans `dist/`.

### Production

```bash
npm start
```
Lance l'application compilée (nécessite d'avoir fait `npm run build` avant).

### Tests

```bash
npm test                # Lance tous les tests
npm run test:watch      # Lance les tests en mode watch
npm run test:coverage   # Lance les tests avec couverture de code
```

## Concepts POO illustrés

### 1. **Classes et Héritage**
- Classe abstraite `Animal`
- Classes concrètes `Dog` et `Cat` qui héritent d'`Animal`
- Méthodes abstraites et concrètes

### 2. **Polymorphisme**
- Méthode `makeSound()` implémentée différemment dans chaque sous-classe
- Démonstration du comportement polymorphique

### 3. **Encapsulation**
- Classe `BankAccount` avec propriétés privées
- Getters/setters pour contrôler l'accès aux données
- Protection de la logique métier

### 4. **Interfaces**
- Interface `IPerson` définissant un contrat
- Classe `Person` implémentant l'interface

### 5. **Modificateurs d'accès**
- `private` : accessible uniquement dans la classe
- `protected` : accessible dans la classe et ses sous-classes
- `public` : accessible partout (par défaut)

## Structure du projet

```
.
├── src/
│   ├── main.ts          # Point d'entrée avec exemples interactifs
│   └── main.test.ts     # Tests unitaires
├── dist/                # Fichiers compilés (généré par build)
├── coverage/            # Rapport de couverture de tests (généré par test:coverage)
├── jest.config.js       # Configuration Jest
├── tsconfig.json        # Configuration TypeScript
├── vite.config.ts       # Configuration Vite
├── package.json         # Dépendances et scripts
└── README.md            # Ce fichier
```

## Dépendances

### Production
- `@inquirer/input` : Saisie utilisateur
- `@inquirer/select` : Menus de sélection
- `@inquirer/confirm` : Confirmations

### Développement
- `typescript` : Langage TypeScript
- `vite` : Build tool et bundler
- `jest` : Framework de tests
- `ts-jest` : Support TypeScript pour Jest

## Utilisation

L'application présente un menu interactif permettant d'explorer différents concepts POO :

1. **Animaux** : Démontre l'héritage et le polymorphisme
2. **Personne** : Illustre l'utilisation des interfaces
3. **Compte bancaire** : Montre l'encapsulation et la protection des données

Chaque exemple est interactif et demande des entrées utilisateur pour personnaliser les démonstrations.

## Ajouter vos propres exemples

1. Créez vos classes dans `src/`
2. Ajoutez des tests dans un fichier `*.test.ts`
3. Importez et utilisez vos classes dans `src/main.ts`
4. Lancez `npm run dev` pour tester

## Ressources

- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [POO en TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Jest Documentation](https://jestjs.io/)
- [Vite Documentation](https://vitejs.dev/)