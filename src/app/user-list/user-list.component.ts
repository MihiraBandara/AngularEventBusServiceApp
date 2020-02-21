import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EventBusService, EmitEvent, Events } from '../services/event-bus.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private eventbus: EventBusService) { }

  ngOnInit() {
    const myUser = new User();
    myUser.firstName = 'Mihira';
    myUser.lastName = 'Bandara';

    const testUser = new User();
    testUser.firstName = 'Test';
    testUser.lastName = 'User';
    this.users.push(myUser, testUser);
  }

  selectUser(user: User) {
    this.eventbus.emit(new EmitEvent(Events.UserSelect, user));
  }
}
