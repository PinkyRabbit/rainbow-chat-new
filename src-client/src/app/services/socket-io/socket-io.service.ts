import * as io from 'socket.io-client';

import { environment } from 'app/environments/environment';

export class SocketioService {
  socket;
  constructor() {}
  setupSocketConnection() {
    this.socket = io(environment.socketEndpoint);
  }
}
