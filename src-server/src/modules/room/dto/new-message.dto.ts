import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsArray, IsMongoId } from 'class-validator';
import { Transform } from 'class-transformer';

import {
  sanitizeString,
  sanitizeStringsArray,
} from 'util/transformation/strings';

export class NewMessageDTO {
  @Transform(sanitizeString)
  @IsString()
  @Length(1, 500)
  @ApiProperty({ type: String, example: 'Никогда не знаешь где тебе повезёт' })
  readonly message: string;

  @Transform(sanitizeStringsArray)
  @IsArray()
  @IsString({ each: true })
  @IsMongoId({ each: true })
  @ApiProperty({
    type: [String],
    example: ['507f191e810c19729de860ea'],
  })
  readonly usersInMessage: string[];
}
