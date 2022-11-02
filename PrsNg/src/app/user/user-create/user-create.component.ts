import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(
    private sys: SystemService,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
  }

}
