import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GameService } from './game.service';
import { GameDto } from './dto/game.dto';
import storage from 'src/config/multer/storage';
import { Express } from 'express';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', { storage }))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() gameDto: GameDto,
  ): Promise<GameDto> {
    gameDto.imageFileName = file.filename;
    return this.gameService.create(gameDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<GameDto> {
    return this.gameService.findOne(id);
  }

  @Get()
  findAll(@Query('name') name: string): Promise<GameDto[]> {
    return this.gameService.getGames(name);
  }

  @Get('topGames')
  findTopGames(): Promise<GameDto[]> {
    return this.gameService.getTopGames();
  }
}
