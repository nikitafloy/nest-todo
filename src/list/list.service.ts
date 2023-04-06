import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './entities/list.entity';
import { Model } from 'mongoose';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel: Model<List>) {}

  async create(createListDto: CreateListDto): Promise<List> {
    const createdList = await this.listModel.create(createListDto);
    return createdList.save();
  }

  findAll(payload) {
    return this.listModel.find(payload);
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
