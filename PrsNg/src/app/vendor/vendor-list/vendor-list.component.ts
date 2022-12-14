import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle: string = "Vendor List";
  vens: Vendor[] = [];
  isAdmin: boolean = false;

  constructor(
    private sys: SystemService,
    private vensvc: VendorService,
  ) { }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.isAdmin = this.sys.user.isAdmin;
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.vens = res;
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

}
