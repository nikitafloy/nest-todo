import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { List } from './entities/list.entity';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel: Model<List>) {}

  async create(createListDto: CreateListDto): Promise<List> {
    const createdList = await this.listModel.create(createListDto);
    return createdList.save();
  }

  async findAll(payload: {
    [Property in keyof List]: List[Property];
  }): Promise<List[]> {
    return this.listModel.find(payload);
  }

  async update(
    id: mongoose.Schema.Types.ObjectId,
    updateListDto: UpdateListDto,
  ): Promise<List> {
    return this.listModel.findByIdAndUpdate(id, updateListDto, { new: true });
  }

  async remove(id: mongoose.Schema.Types.ObjectId): Promise<List> {
    return this.listModel.findByIdAndDelete(id);
  }
}
