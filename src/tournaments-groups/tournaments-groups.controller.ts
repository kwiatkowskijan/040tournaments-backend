import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TournamentsGroupsService } from './tournaments-groups.service';
import { CreateTournamentsGroupDto } from './dto/create-tournaments-group.dto';
import { UpdateTournamentsGroupDto } from './dto/update-tournaments-group.dto';

@Controller('tournaments/:tournamentId')
export class TournamentsGroupsController {
  constructor(private readonly tournamentsGroupsService: TournamentsGroupsService) {}

  @Post('groups')
  create(@Body() createTournamentsGroupDto: CreateTournamentsGroupDto) {
    return this.tournamentsGroupsService.create(createTournamentsGroupDto);
  }

  @Get('groups')
  findAllByTournament(@Param('tournamentId') tournamentId: number) {
    return this.tournamentsGroupsService.findAllByTournament(+tournamentId);
  }

  @Get('groups/:id')
  findOne(@Param('tournamentId') tournamentId: number, @Param('id') id: string) {
    return this.tournamentsGroupsService.findOneByTournament(+tournamentId, +id);
  }

  @Put('groups/:id')
  update(@Param('id') id: string, @Body() updateTournamentsGroupDto: UpdateTournamentsGroupDto) {
    return this.tournamentsGroupsService.update(+id, updateTournamentsGroupDto);
  }

  @Delete('groups/:id')
  remove(@Param('id') id: string) {
    return this.tournamentsGroupsService.remove(+id);
  }
}
