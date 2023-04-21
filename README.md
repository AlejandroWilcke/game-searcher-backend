game-searcher-backend: Restful API about games, NestJS + Typescript + PostgresQL + Sequelize.

## Setup

Clone the project in your local machine:

```
git clone https://github.com/AlejandroWilcke/game-searcher-backend.git
```

# Instalation

In root folder:
```
 npm install
```

# Run the program
```
 npm run start:dev
```

# Using the program
```
You can access the API on: 
GET http://localhost:5000/api/v1/games
GET http://localhost:5000/api/v1/games?name={regexp}
GET http://localhost:5000/api/v1/games/topGames
GET http://localhost:5000/api/v1/{id}
POST http://localhost:5000/api/v1/games
```

## Eslint
```
 npm run lint
```

## Prettier
```
 npm run format
```
