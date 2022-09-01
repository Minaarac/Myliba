import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from '../../model/user/user.model';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnDestroy {
  public loading = false;

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  user: UserModel = new UserModel();
  private routeSub: Subscription = new Subscription();
  public fullname: string = "Ad-Soyaddddd";

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
      params => {
        this.getDetail(params['id'])
        this.fullname = params['fullname'];
      });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getDetail(id: number) {
    this.loading = true;
    this.userService.getDetail(id).subscribe(
      (res) => {
        this.loading = false;
        this.user = res;
      });

  }

}
