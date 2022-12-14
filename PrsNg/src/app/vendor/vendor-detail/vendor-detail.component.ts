import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pageTitle: string = "Vendor Detail";
  ven!: Vendor;
  isAdmin: boolean = false;

  constructor(
    private sys: SystemService,
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  showVerifyButton: boolean = true;
  verifyButtonColor: string = "btn btn-secondary";

  toVendorChangePage(): void {
    this.router.navigateByUrl(`/vendor/change/${this.ven.id}`)
  }

  toggleVerifyButton(): void {
    this.showVerifyButton = !this.showVerifyButton;
    this.verifyButtonColor = (this.showVerifyButton ? "btn btn-secondary" : "btn btn-danger");
  }

  remove(): void {
    this.vensvc.remove(this.ven.id).subscribe({
      next: (res) => {
        console.debug("Vendor Deleted!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.isAdmin = this.sys.user.isAdmin;
    let id = this.route.snapshot.params["id"];
    this.vensvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.ven = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
