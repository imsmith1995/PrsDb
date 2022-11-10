import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { VendorService } from '../vendor.service';
import { Po } from './po.class';
import { Poline } from './poline.class';

@Component({
  selector: 'app-vendor-po',
  templateUrl: './vendor-po.component.html',
  styleUrls: ['./vendor-po.component.css']
})
export class VendorPoComponent implements OnInit {

  pageTitle: string = "Vendor PO";
  po: Po = null!;

  constructor(
    private sys: SystemService,
    private vensvc: VendorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sys.checkLogin();
    let id = this.route.snapshot.params["id"];
    this.vensvc.vendorPO(id).subscribe({
      next: (res) => {
        console.debug("PO: ", res);
        this.po = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
