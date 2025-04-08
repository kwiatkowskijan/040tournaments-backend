import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { TournamentsTeamsService } from './tournaments-teams.service';
import { CreateTournamentsTeamDto } from './dto/create-tournaments-team.dto';
import { UpdateTournamentsTeamDto } from './dto/update-tournaments-team.dto';
import { GetTournamentsTeamDto } from './dto/get-tournaments-team.dto';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('tournaments/:tournamentId')
export class TournamentsTeamsController {
  constructor(@Inject('TournamentsTeamsService') private readonly tournamentsTeamsService: TournamentsTeamsService) { }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto,
  })
  @Post('teams')
  create(@Body() createTournamentsTeamDto: CreateTournamentsTeamDto): GetTournamentsTeamDto {
    return this.tournamentsTeamsService.create(createTournamentsTeamDto);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Get('teams')
  findAllByTournament(@Param('tournamentId') tournamentId: number) {
    return this.tournamentsTeamsService.findAllByTournament(+tournamentId) || [];
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of team in tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Get('teams/:id')
  findOne(@Param('id') id: number) {
    return this.tournamentsTeamsService.findOne(+id);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of team in tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Put('teams/:id')
  update(@Param('id') id: number, @Body() updateTournamentsTeamDto: UpdateTournamentsTeamDto) {
    return this.tournamentsTeamsService.update(+id, updateTournamentsTeamDto);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of team in tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament Team record',
    type: GetTournamentsTeamDto
  })
  @Delete('teams/:id')
  remove(@Param('id') id: number) {
    return this.tournamentsTeamsService.remove(+id);
  }
}
