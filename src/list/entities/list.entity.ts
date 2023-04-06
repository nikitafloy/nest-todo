import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
    type: String,
    required: true,
    index: true,
  })
  owner: string;
}

export const ListSchema = SchemaFactory.createForClass(List);
