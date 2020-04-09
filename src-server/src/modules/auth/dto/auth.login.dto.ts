import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class AuthLoginDTO {
  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'usesa' })
  readonly username: string;

  @IsString()
  @Length(6, 30)
  @ApiProperty({ type: String, example: 'asdqwe' })
  readonly password: string;
}
