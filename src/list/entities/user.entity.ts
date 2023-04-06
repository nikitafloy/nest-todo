import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ type: String, required: true, length: 32, index: true })
  name: string;

  @Prop({
    type: String,
    validate: {
      validator: (value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g),
      message: (props) => `${props.value} is not a valid email!`,
    },
    index: true,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
