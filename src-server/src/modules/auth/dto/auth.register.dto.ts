import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNumber,
  IsInt,
  IsString,
  IsEmail,
  Length,
  Matches,
  Min,
  IsEnum,
} from 'class-validator';
import { Transform } from 'class-transformer';

import { transformYear } from 'util/transformation/with-time';
import { transformGender } from 'util/transformation/enums';

export enum Gender {
  male,
  female,
}

export class AuthRegisterDTO {
  @IsString()
  @IsEmail()
  @ApiProperty({ type: String, example: 'zaraza4@email.ua' })
  readonly email: string;

  @IsString()
  @Length(6, 30)
  @Matches(/(.*[a-z].*){2,}/)
  @ApiProperty({ type: String, example: 'asdqwe' })
  readonly password: string;

  @IsString()
  @Length(6, 30)
  @Matches(/(.*[a-z].*){2,}/)
  @ApiProperty({ type: String, example: 'asdqwe' })
  readonly passwordConfirmation: string;

  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'usesa' })
  readonly username: string;

  @Transform(transformYear)
  @IsNumber()
  @IsInt()
  @Min(1950)
  @ApiPropertyOptional({ type: Number, example: 22 })
  readonly year: number;

  @Transform(transformGender)
  @IsString()
  @IsEnum(Gender)
  @ApiPropertyOptional({ type: Number, example: 1 })
  readonly gender: string;
}
