import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '#chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['chat-users.component.scss'],
})
export class ChatUsersComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
