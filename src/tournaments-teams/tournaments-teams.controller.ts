import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe  } from '@nestjs/common';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';

@Controller('tournaments/:tournamentId')
export class TournamentsTeamsController {
  constructor(private readonly tournamentsTeamsService: TournamentsTeamsService) {}

  @Post('teams')
  create(@Param('tournamentId') tournamentId: number, @Body() createTournamentsTeamDto: CreateTournamentsTeamDto) {
    return this.tournamentsTeamsService.create(createTournamentsTeamDto);
  }

  @Get('teams')
  findTeamsByTournament(@Param('tournamentId', ParseIntPipe) tournamentId: number) {
    return this.tournamentsTeamsService.findTeamsByTournament(tournamentId);
  }

  @Get('teams/:id')
  findOne(@Param('tournamentId') tournamentId: number, @Param('id') id: number) {
    return this.tournamentsTeamsService.findOne(+id);
  }

  @Patch('teams/:id')
  update(@Param('tournamentId') tournamentId: number, @Param('id') id: number, @Body() updateTournamentsTeamDto: UpdateTournamentsTeamDto) {
    return this.tournamentsTeamsService.update(+id, updateTournamentsTeamDto);
  }

  @Delete('teams/:id')
  remove(@Param('tournamentId') tournamentId: number, @Param('id') id: number) {
    return this.tournamentsTeamsService.remove(+id);
  }
}
