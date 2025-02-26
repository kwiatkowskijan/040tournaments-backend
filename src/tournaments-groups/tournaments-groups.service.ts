import { Injectable } from '@nestjs/common';
import { CreateTournamentsGroupDto } from './dto/create-tournaments-group.dto';
import { UpdateTournamentsGroupDto } from './dto/update-tournaments-group.dto';

@Injectable()
export class TournamentsGroupsService {
  create(createTournamentsGroupDto: CreateTournamentsGroupDto) {
    return 'This action adds a new tournamentsGroup';
  }

  findAll() {
    return `This action returns all tournamentsGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tournamentsGroup`;
  }

  update(id: number, updateTournamentsGroupDto: UpdateTournamentsGroupDto) {
    return `This action updates a #${id} tournamentsGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournamentsGroup`;
  }
}
