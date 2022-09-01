import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from '../../model/user/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public id: number = 0;
  private routeSub: Subscription = new Subscription();
  public loading = false;
  user: UserModel = new UserModel();
  message: string='Başlık';

  constructor(private userService: UserService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.routeSub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        if(this.id){
          this.message = "Edit";
          this.getDetail(params['id'])
        }
        else{
          this.message="Add User"
        }
      });
  }

  addOrUpdateUser(user:UserModel) {
    if(this.id){
      this.userService.updateUser(this.id,this.user)
      .subscribe((res) => {
        this.router.navigate(['/list-user'])
      }, (err) => {
        console.log(err);
      });
    }
    else{
      this.userService.addUser(this.user).subscribe((res)=>{
      this.router.navigate(['/list-user'])
      })
    }
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
