import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

import { DatabaseModule } from 'database/database.module';
import { SocketIoGateway } from 'socket-io/socket-io.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomService, SocketIoGateway],
})
export class RoomModule {}
