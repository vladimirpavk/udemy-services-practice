import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  private users: string[] = []
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService:UsersService){}

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }

  ngOnInit(){
    this.users=this.usersService.activeUsers;
  }
}
