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
  findAllByTeam(@Param('tournamentId') tournamentId: number, @Param('teamId') teamId: number) {
    return this.tournamentsTeamsPlayersService.findAllByTeam(+tournamentId, +teamId);
  }

  @Get('players/:id')
  findOne(@Param('tournamentId') tournamentId: number, @Param('teamId') teamId: number, @Param('id') id: number) {
    return this.tournamentsTeamsPlayersService.findOne(+tournamentId, +teamId, +id);
  }

  @Put('players/:id')
  update(@Param('tournamentId') tournamentId: number, @Param('teamId') teamId: number, @Param('id') id: string, @Body() updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.update(+tournamentId, +teamId, +id, updateTournamentsTeamsPlayerDto);
  }

  @Delete('players/:id')
  remove(@Param('tournamentId') tournamentId: number, @Param('teamId') teamId: number, @Param('id') id: number) {
    return this.tournamentsTeamsPlayersService.remove(+tournamentId, +teamId, +id);
  }
}
