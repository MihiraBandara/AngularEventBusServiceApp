import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { EventBusService, Events } from '../services/event-bus.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  user = new User();
  eventbusSub: Subscription;

  constructor(private eventbus: EventBusService) { }

  ngOnInit() {
    this.eventbusSub = this.eventbus.on(Events.UserSelect, (user => this.user = user));
  }

  ngOnDestroy() {
    this.eventbusSub.unsubscribe();
  }

}
