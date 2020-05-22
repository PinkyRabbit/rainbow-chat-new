import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';

interface newMessage {
  message: string;
  usersInMessage: string[];
}

@Injectable()
export class ChatMessagesService {
  private apiUrl = environment.apiUrl;

  // listeners
  // roomMessage = this.socket.fromEvent<any>('roomMessage');
  // serviceCheck = this.socket.fromEvent<boolean>('serviceCheck');

  sendMessageToRoom(room: string, msg: newMessage) {
    return this.http.post(`${this.apiUrl}/room/${room}`, msg);
  }

  constructor(private http: HttpClient) {}
}
