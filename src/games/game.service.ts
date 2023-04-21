import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { GameDto } from './dto/game.dto';
import { Game } from './game.entity';
import { GAMES_REPOSITORY } from 'src/constants';
import { Op } from 'sequelize';

@Injectable()
export class GameService {
  constructor(
    @Inject(GAMES_REPOSITORY)
    private gamesRepository: typeof Game,
  ) {}

  async create(game: GameDto): Promise<GameDto> {
    const result = await this.gamesRepository
      .create({ ...game })
      .catch((error) => {
        console.log(error);
        throw new BadRequestException(error.message);
      });
    return result;
  }

  async findOne(id: number): Promise<GameDto> {
    return await this.gamesRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getGames(name: string): Promise<GameDto[]> {
    if (name) {
      return await this.gamesRepository.findAll({
        where: {
          name: {
            [Op.iRegexp]: name,
          },
        },
      });
    } else {
      return await this.gamesRepository.findAll({});
    }
  }

  async getTopGames(): Promise<GameDto[]> {
    return await this.gamesRepository.findAll({
      order: [['rating', 'DESC']],
      limit: 10,
    });
  }
}
