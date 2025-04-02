import { Controller, Get, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';

@Controller('tournaments/:tournamentId/teams/:teamId')
export class TournamentsTeamsPlayersController {
  constructor(@Inject('TournamentsTeamsPlayersService') private readonly tournamentsTeamsPlayersService: TournamentsTeamsPlayersService) { }

  @Post('players')
  create(@Body() createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.create(createTournamentsTeamsPlayerDto);
  }

  @Get('players')
  findAllByTeam(@Param('teamId') teamId: number) {
    return this.tournamentsTeamsPlayersService.findAllByTeam(+teamId);
  }

  @Get('players/:id')
  findOne(@Param('id') id: number) {
    return this.tournamentsTeamsPlayersService.findOne(+id);
  }

  @Put('players/:id')
  update(@Param('id') id: string, @Body() updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.update(+id, updateTournamentsTeamsPlayerDto);
  }

  @Delete('players/:id')
  remove(@Param('id') id: number) {
    return this.tournamentsTeamsPlayersService.remove(+id);
  }
}
