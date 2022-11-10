import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle: string = "Home";
  message: string = "";

  constructor(
    private sys: SystemService,
    private router: Router
  ) { }

  toUsers(): void {
    this.router.navigateByUrl("/user/list");
  }
  toVendors(): void {
    this.router.navigateByUrl("/vendor/list");
  }
  toProducts(): void {
    this.router.navigateByUrl("/product/list");
  }
  toRequests(): void {
    this.router.navigateByUrl("/request/list");
  }
  toReviews(): void {
    this.router.navigateByUrl("/request/review");
  }
  toAbout(): void {
    this.router.navigateByUrl("/about");
  }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.message = `Welcome, ${this.sys.user.firstname}`;
  }

}
