import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { GetTournamentsTeamDto } from './dto/get-tournaments-team.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('tournaments/:tournamentId')
export class TournamentsTeamsController {
  constructor(@Inject('TournamentsTeamsService') private readonly tournamentsTeamsService: TournamentsTeamsService) { }

  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto,
  })
  @Post('teams')
  create(@Body() createTournamentsTeamDto: CreateTournamentsTeamDto): GetTournamentsTeamDto {
    return this.tournamentsTeamsService.create(createTournamentsTeamDto);
  }

  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Get('teams')
  findAllByTournament(@Param('tournamentId') tournamentId: number) {
    return this.tournamentsTeamsService.findAllByTournament(+tournamentId) || [];
  }

  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Get('teams/:id')
  findOne(@Param('id') id: number) {
    return this.tournamentsTeamsService.findOne(+id);
  }

  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Put('teams/:id')
  update(@Param('id') id: number, @Body() updateTournamentsTeamDto: UpdateTournamentsTeamDto) {
    return this.tournamentsTeamsService.update(+id, updateTournamentsTeamDto);
  }

  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Delete('teams/:id')
  remove(@Param('id') id: number) {
    return this.tournamentsTeamsService.remove(+id);
  }
}
