import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';

@Controller('tournaments/:tournamentId/teams/:teamId')
export class TournamentsTeamsPlayersController {
  constructor(private readonly tournamentsTeamsPlayersService: TournamentsTeamsPlayersService) {}

  @Post('players')
  create(@Body() createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.create(createTournamentsTeamsPlayerDto);
  }

  @Get('players')
  findAll(@Param('teamId') teamId: number) {
    return this.tournamentsTeamsPlayersService.findAll(teamId);
  }

  @Get('players/:id')
  findOne(@Param('id') id: string) {
    return this.tournamentsTeamsPlayersService.findOne(+id);
  }

  @Put('players/:id')
  update(@Param('id') id: string, @Body() updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.update(+id, updateTournamentsTeamsPlayerDto);
  }

  @Delete('players/:id')
  remove(@Param('id') id: string) {
    return this.tournamentsTeamsPlayersService.remove(+id);
  }
}
