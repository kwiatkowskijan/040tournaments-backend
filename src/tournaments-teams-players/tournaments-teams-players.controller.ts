import { Controller, Get, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { TournamentsTeamsPlayersService } from './tournaments-teams-players.service';
import { CreateTournamentsTeamsPlayerDto } from './dto/create-tournaments-teams-player.dto';
import { UpdateTournamentsTeamsPlayerDto } from './dto/update-tournaments-teams-player.dto';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { GetTournamentsTeamsPlayerDto } from './dto/get-tournaments-teams-player.dto';

@Controller('tournaments/:tournamentId/teams/:teamId')
export class TournamentsTeamsPlayersController {
  constructor(@Inject('TournamentsTeamsPlayersService') private readonly tournamentsTeamsPlayersService: TournamentsTeamsPlayersService) { }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'teamId',
    type: 'number',
    description: 'ID of team in tournament',
    required: false
  })
  @ApiOkResponse({
    description: 'The TournamentsTeamsPlayer Team record',
    type: GetTournamentsTeamsPlayerDto
  })
  @Post('players')
  create(@Body() createTournamentsTeamsPlayerDto: CreateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.create(createTournamentsTeamsPlayerDto);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'teamId',
    type: 'number',
    description: 'ID of team in tournament',
  })
  @ApiOkResponse({
    description: 'The TournamentsTeamsPlayer Team record',
    type: GetTournamentsTeamsPlayerDto
  })
  @Get('players')
  findAllByTeam(@Param('teamId') teamId: number) {
    return this.tournamentsTeamsPlayersService.findAllByTeam(+teamId);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'teamId',
    type: 'number',
    description: 'ID of team in tournament',
    required: false
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of player in team in tournament',
  })
  @ApiOkResponse({
    description: 'The TournamentsTeamsPlayer Team record',
    type: GetTournamentsTeamsPlayerDto
  })
  @Get('players/:id')
  findOne(@Param('id') id: number) {
    return this.tournamentsTeamsPlayersService.findOne(+id);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'teamId',
    type: 'number',
    description: 'ID of team in tournament',
    required: false
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of player in team in tournament',
  })
  @ApiOkResponse({
    description: 'The TournamentsTeamsPlayer Team record',
    type: GetTournamentsTeamsPlayerDto
  })
  @Put('players/:id')
  update(@Param('id') id: string, @Body() updateTournamentsTeamsPlayerDto: UpdateTournamentsTeamsPlayerDto) {
    return this.tournamentsTeamsPlayersService.update(+id, updateTournamentsTeamsPlayerDto);
  }

  @ApiParam({
    name: 'tournamentId',
    type: 'number',
    description: 'ID of tournament',
    required: false
  })
  @ApiParam({
    name: 'teamId',
    type: 'number',
    description: 'ID of team in tournament',
    required: false
  })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of player in team in tournament',
  })
  @ApiOkResponse({
    description: 'The TournamentsTeamsPlayer Team record',
    type: GetTournamentsTeamsPlayerDto
  })
  @Delete('players/:id')
  remove(@Param('id') id: number) {
    return this.tournamentsTeamsPlayersService.remove(+id);
  }
}
