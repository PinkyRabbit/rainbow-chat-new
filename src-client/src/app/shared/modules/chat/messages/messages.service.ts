import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';

interface newMessage {
  message: string;
  usersInMessage: string[];
}

@Injectable()
export class ChatMessagesService {
  private apiUrl = environment.apiUrl;

  sendMessageToRoom(roomId: string, msg: newMessage) {
    return this.http.post(`${this.apiUrl}/room/${roomId}/message`, msg);
  }

  /*
  subscribeToRoomMessages() {
    return this.socket.fromEvent<any>('room.message').pipe(
      tap(() => alert('message!')),
      // tap((data) => console.log(data)),
      tap((data) => console.log(data.msg)),
      map((data) => data)
    );
  }

    // listeners
  // roomMessage = this.socket.fromEvent<any>('roomMessage');
  // serviceCheck = this.socket.fromEvent<boolean>('serviceCheck');
  joinRoom(roomId) {
    this.socket.emit('room.join', roomId);
  }
  */

  constructor(private http: HttpClient) {}
}
