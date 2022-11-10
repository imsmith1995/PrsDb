import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Input() pageTitle: string = "No Title";
  user: User = this.sys.user;

  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
  }

}
