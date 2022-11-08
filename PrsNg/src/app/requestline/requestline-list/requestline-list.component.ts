import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  pageTitle: string = "Request Lines";
  reqlns: Requestline[] = [];
  lineTotal: number = 0;
  req!: Request;

  constructor(
    private sys: SystemService,
    private reqlnsvc: RequestlineService,
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getRequest();
    for(let rq of this.req.requestlines){
      this.reqlns.push(rq);
    }
    //this.reqlns = this.req.requestlines
  }

  getRequest(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request: ", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
