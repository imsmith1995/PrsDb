import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu ("Home", "/home"),
    new Menu ("Users", "/user/list"),
    new Menu ("Vendors", "/vendor/list"),
    new Menu ("Products", "/product/list"),
    new Menu ("Requests", "/request/list"),
    new Menu ("Reviews", "/request/review"),
    new Menu ("About", "/about"),
    //new Menu ("Log Out", "/user/login")
  ]

  logOutMenu: Menu = new Menu ("Log Out", "/user/login");

  constructor() { }

  ngOnInit(): void {
  }

}
