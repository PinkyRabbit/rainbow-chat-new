import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class AuthRefreshDTO {
  @IsString()
  @IsUUID('4')
  @ApiPropertyOptional({
    type: String,
    example: 'c8ed30bd-73c6-413c-b433-24e403a36d27',
  })
  readonly refreshToken: string;
}
