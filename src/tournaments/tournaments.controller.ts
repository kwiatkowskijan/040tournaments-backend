import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { GetTournamentDto } from './dto/get-tournament.dto';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('tournaments')
export class TournamentsController {
  constructor(@Inject('TournamentsService') private readonly tournamentsService: TournamentsService) { }

  @ApiOkResponse({
    description: 'The Tournament record',
    type: GetTournamentDto,
  })
  @Post()
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentsService.create(createTournamentDto);
  }

  @ApiOkResponse({
    description: 'The Tournament record',
    type: GetTournamentDto,
  })
  @Get()
  findAll() {
    return this.tournamentsService.findAll();
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament record',
    type: GetTournamentDto,
  })
  @Get(':id')
  findOne(@Param('id') id?: number) {
    if (id === undefined) {
      return;
    }
    return this.tournamentsService.findOne(+id);
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament record',
    type: GetTournamentDto,
  })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTournamentDto: UpdateTournamentDto) {
    return this.tournamentsService.update(+id, updateTournamentDto);
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of tournament',
  })
  @ApiOkResponse({
    description: 'The Tournament record',
    type: GetTournamentDto,
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tournamentsService.remove(+id);
  }
}
