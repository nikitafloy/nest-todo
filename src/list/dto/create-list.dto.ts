import {
  ArrayMaxSize,
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

abstract class User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}

enum Priority {
  low,
  high,
  middle,
}

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsDateString()
  time: Date;

  @IsArray()
  @ArrayMaxSize(5)
  tags: string[];

  @IsString()
  @IsNotEmpty()
  priority: Priority;

  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => User)
  owner: User;
}
