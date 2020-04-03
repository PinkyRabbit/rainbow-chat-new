import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsNumber,
  IsInt,
  IsString,
  IsEmail,
  Length,
  Matches,
  Min,
  Max,
} from 'class-validator';

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
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'Mikita' })
  readonly firstName: string;

  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'Melnikau' })
  readonly lastName: string;

  @IsNumber()
  @IsInt()
  @Min(12)
  @Max(99)
  @ApiPropertyOptional({ type: Number, example: 22 })
  readonly age: number;

  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'Belarus' })
  readonly country: string;

  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'Minsk' })
  readonly city: string;

  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: '+3752599999998' })
  readonly phone: string;
}
