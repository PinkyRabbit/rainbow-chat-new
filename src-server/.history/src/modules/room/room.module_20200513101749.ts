import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

import { DatabaseModule } from 'database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
