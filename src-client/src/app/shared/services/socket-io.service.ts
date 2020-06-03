import { SubSink } from 'subsink';
import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';

@Injectable()
export class SocketIoService {
  public connect() {
    this.socket.connect();
    this.subs.unsubscribe();

    // subscribe to room messages
    this.subs.sink = this.socket
      .fromEvent('room.message')
      .subscribe((message) => {
        console.log('ROOM > MESSAGE');
        console.log(JSON.stringify(message));
      }, this.onError);
  }

  public disconnect() {
    this.socket.disconnect();
    this.subs.unsubscribe();
  }

  // Room
  public joinRoom(roomSlug: string) {
    alert('joinRoom');
    this.socket.emit('room.join', roomSlug).subscribe(
      () => alert('done'),
      (error) => console.log(error)
    );
  }

  public leaveRoom(roomSlug: string) {
    this.socket.emit('room.exit', roomSlug);
  }

  constructor(private socket: Socket) {}

  private subs = new SubSink();

  private onError(error) {
    console.log(`Socket error: ${JSON.stringify(error)}`);
  }
}
