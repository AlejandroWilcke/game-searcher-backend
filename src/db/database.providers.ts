import { Sequelize } from 'sequelize-typescript';
import { Game } from '../games/game.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
      });
      sequelize.addModels([Game]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
