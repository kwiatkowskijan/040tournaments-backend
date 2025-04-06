import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { GetTournamentsTeamDto } from './dto/get-tournaments-team.dto';

@Controller('tournaments/:tournamentId')
export class TournamentsTeamsController {
  constructor(@Inject('TournamentsTeamsService') private readonly tournamentsTeamsService: TournamentsTeamsService) { }

  @Post('teams')
  create(@Body() createTournamentsTeamDto: CreateTournamentsTeamDto): GetTournamentsTeamDto {
    return this.tournamentsTeamsService.create(createTournamentsTeamDto);
  }

  @Get('teams')
  findAllByTournament(@Param('tournamentId') tournamentId: number) {
    return this.tournamentsTeamsService.findAllByTournament(+tournamentId) || [];
  }

  @Get('teams/:id')
  findOne(@Param('id') id: number) {
    return this.tournamentsTeamsService.findOne(+id);
  }

  @Put('teams/:id')
  update(@Param('id') id: number, @Body() updateTournamentsTeamDto: UpdateTournamentsTeamDto) {
    return this.tournamentsTeamsService.update(+id, updateTournamentsTeamDto);
  }

  @Delete('teams/:id')
  remove(@Param('tournamentId') tournamentId: number, @Param('id') id: number) {
    return this.tournamentsTeamsService.remove(+id);
  }
}
