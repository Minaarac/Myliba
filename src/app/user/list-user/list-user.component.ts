import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from '../../model/user/user.model';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [UserService]
})
export class ListUserComponent implements OnInit {
  public loading = false;

  constructor(private userService: UserService) { }

  users: UserModel[] = []
  orderParam: string = "desc";
  message: string = '';
  selectedUsers: UserModel[] = [];
  selectValue: boolean = false;
  disabled: boolean = true;
  // checkButton:boolean =true;


  ngOnInit(): void {
    this.getUser();
  }

  getUser(orderPram: string = '', searchParam: string = '') {
    this.loading = true;
    this.userService.getAllUsers(this.orderParam, searchParam)
      .subscribe((res: any) => {
        this.loading = false;
        this.users = res;
      }, (err) => {
        this.loading = false;
        console.log(err);
      });
  }

  getUserWithOrder() {
    this.loading = true;
    if (this.orderParam == 'desc') {
      this.orderParam = 'asc';
    }
    else {
      this.orderParam = 'desc';
    }
    this.loading = false;
    this.getUser(this.orderParam);
  }

  delUser(id?: number) {
    if (confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) {
      if (!id)
        return;
      this.userService.delUser(id)
        .subscribe((res) => {
          this.getUser();
        }, (err) => {
          console.log(err);
        });
    }
  }
  search(event: any = {}) {
    this.getUser(this.message);
  }

  selected(user:UserModel) {
    if (!user)
      return;

    const index: number = this.selectedUsers.indexOf(user);
    if (index == -1) {
      this.selectedUsers.push(user);
      
      console.log(this.selectedUsers);
    }
    else {
      this.selectedUsers.splice(index, 1);
      console.log(this.selectedUsers);
    }
    if (this.selectedUsers.length == 0) {
      this.disabled = true;
    }
    else {
      this.disabled = false;
    }
  }

  deleteSelected() {

    let deleted: Observable<Object>[] = [];

    for (let index = 0; index < this.selectedUsers.length; index++) {
      const element = this.selectedUsers[index];
      if(!element.id)
        return;

      deleted.push(this.userService.delUser(element.id))
    }
    if (confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) {

      forkJoin(deleted).subscribe(
        (delRes => {
          console.log("Delete done.");
          this.getUser();
          this.selectedUsers = []; //silme işleminden sonra diziyi temizle.
        }));
    }
  }
}
