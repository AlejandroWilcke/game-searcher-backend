import { Game } from './game.entity';
import { GAMES_REPOSITORY } from 'src/constants';

export const gameProviders = [
  {
    provide: GAMES_REPOSITORY,
    useValue: Game,
  },
];
