import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.entity';

export type ListDocument = HydratedDocument<List>;

@Schema()
export class List {
  @Prop({ type: String, required: true, length: 280 })
  title: string;

  @Prop({ type: Date, index: true })
  time: Date;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ type: String, enum: ['low', 'high', 'middle'], required: true })
  priority: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    index: true,
  })
  owner: User;
}

export const ListSchema = SchemaFactory.createForClass(List);
