import {
  Controller,
  Get,
  UseGuards,
  Request,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { JwtAuthGuard } from 'guards/jwt-auth.guard';

import { RoomService } from './room.service';
import { RoomMessageValidationPipe } from './pipes/room-message.validation.pipe';
import { NewMessageDTO } from './dto/new-message.dto';

@ApiTags('Rooms')
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiOperation({ summary: 'Get random room id' })
  @ApiBearerAuth()
  @Get('/random')
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@Request() req) {
    return await this.roomService.getRandomRoom();
    // return await this.roomService.getRandomRoom(req.user);
  }

  @ApiOperation({ summary: 'Join room return room + users' })
  @ApiBearerAuth()
  @Get('/:roomId/join')
  @UseGuards(JwtAuthGuard)
  async joinRoom(@Request() req, @Param('roomId') roomId: string) {
    return await this.roomService.joinRoom(req.user, roomId);
  }

  @ApiOperation({ summary: 'Send message to room' })
  @ApiBearerAuth()
  @Post('/:roomSlug/message')
  @UseGuards(JwtAuthGuard)
  async sendMessage(
    @Request() req,
    @Param('roomSlug') roomSlug: string,
    @Body(RoomMessageValidationPipe) newMessage: NewMessageDTO,
  ) {
    return await this.roomService.sendMessage(req.user, roomSlug, newMessage);
  }
}
