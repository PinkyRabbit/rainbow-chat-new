import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway(8988, { origins: 'http://localhost:4200' })
export class SocketIoGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('room.join')
  handleRoomJoin(client: Socket, room: string) {
    console.log('join room');
    client.join(room);
    client.emit('room.join:success', room);
  }

  @SubscribeMessage('room.leave')
  handleRoomLeave(client: Socket, room: string) {
    client.leave(room);
    client.emit('room.leave', room);
  }

  sendToRoom(room: string, data) {
    this.server.to(room).emit('room.message', data);
  }

  // async emitToRoom(room, event, data = null) {
  //   await this.server.to(room).emit(event, data);
  // }

  // @SubscribeMessage('ping')
  // pingPong(@MessageBody() data: any): Observable<WsResponse<any>> {
  //   console.log('pingPong');
  //   return of({ event: 'pong', data: { success: true, result: 123 } });
  // }

  // @SubscribeMessage('zzz')
  // handleMessage() {
  //   console.log('pingPong');
  //   this.server.emit('pong');
  // }

  // @SubscribeMessage('events')
  // findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
  //   return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  // }

  // @SubscribeMessage('identity')
  // async identity(@MessageBody() data: number): Promise<number> {
  //   return data;
  // }

  // @SubscribeMessage('joinRoom')
  // handleRoomJoin(client: Socket, room: string) {
  //   client.join(room);
  //   client.emit('joinedRoom', room);
  // }

  // @SubscribeMessage('leaveRoom')
  // handleRoomLeave(client: Socket, room: string) {
  //   client.leave(room);
  //   client.emit('leftRoom', room);
  // }
}
