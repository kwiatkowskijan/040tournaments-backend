import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';

@Controller('tournaments-teams-players')
export class TournamentsTeamsPlayersController {
  constructor(private readonly tournamentsTeamsPlayersService: TournamentsTeamsPlayersService) {}

  @Post()
  create(@Body() createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.create(createTournamentsTeamsPlayerDto);
  }

  @Get()
  findAll() {
    return this.tournamentsTeamsPlayersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tournamentsTeamsPlayersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.update(+id, updateTournamentsTeamsPlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tournamentsTeamsPlayersService.remove(+id);
  }
}
