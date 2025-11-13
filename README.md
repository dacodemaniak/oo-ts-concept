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


## Ressources

- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [POO en TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html)
- [Jest Documentation](https://jestjs.io/)
- [Vite Documentation](https://vitejs.dev/)