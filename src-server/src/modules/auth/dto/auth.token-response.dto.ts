import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenResponseDTO {
  @ApiProperty({
    type: String,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGVmNTQ2YzkzNzFlMTg4ODY5YzhjMiIsInJlbWVtYmVyTWUiOmZhbHNlLCJpYXQiOjE1ODc4ODY1MjQsImV4cCI6MTU4Nzg4NjU4NH0.2r1P0oNsO4l5u67Ck3k-0HOXePvjIwG7AudquQk96x0',
  })
  readonly token: string;

  @ApiProperty({
    type: String,
    example: 'c8ed30bd-73c6-413c-b433-24e403a36d27',
  })
  readonly refreshToken: string;
}
