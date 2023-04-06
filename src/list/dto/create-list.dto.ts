import {
  ArrayMaxSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
} from 'class-validator';

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

  @IsString()
  @IsNotEmpty()
  owner: string;
}
