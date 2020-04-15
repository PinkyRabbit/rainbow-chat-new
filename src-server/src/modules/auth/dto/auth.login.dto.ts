import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Length, IsBoolean, IsOptional } from 'class-validator';

export class AuthLoginDTO {
  @IsString()
  @Length(2, 30)
  @ApiPropertyOptional({ type: String, example: 'usesa' })
  readonly username: string;

  @IsString()
  @Length(6, 30)
  @ApiProperty({ type: String, example: 'asdqwe' })
  readonly password: string;

  @IsOptional()
  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean, example: false })
  readonly rememberMe: boolean;
}
