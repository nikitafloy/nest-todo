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

  findAll(payload) {
    return this.listModel.find(payload);
  }

  update(id: mongoose.Schema.Types.ObjectId, updateListDto: UpdateListDto) {
    return this.listModel.findByIdAndUpdate(id, updateListDto, { new: true });
  }

  remove(id: mongoose.Schema.Types.ObjectId) {
    return this.listModel.findByIdAndDelete(id);
  }
}
