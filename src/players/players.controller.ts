import { Controller, Get, Post, Body, Put, Param, Delete, Patch, Query } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { PlayersService } from './players.service';
import { GetPlayerDto } from './dto/get-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('players')
export class PlayersController {
  constructor(@Inject('PlayersService') private readonly playersService: PlayersService) { }

  @ApiOkResponse({
    description: 'The Player record',
    type: GetPlayerDto,
  })
  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @ApiOkResponse({
    description: 'The Player record',
    type: GetPlayerDto,
  })
  @Get()
  findAll(@Query('withoutTeamInTournamentId') tournamentId?: number) {
    return this.playersService.findAll();
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of player',
  })
  @ApiOkResponse({
    description: 'The Player record',
    type: GetPlayerDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of player',
  })
  @ApiOkResponse({
    description: 'The Player record',
    type: GetPlayerDto,
  })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return await this.playersService.update(+id, updatePlayerDto);
  }

  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of player',
  })
  @ApiOkResponse({
    description: 'The Player record',
    type: GetPlayerDto,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }
}
