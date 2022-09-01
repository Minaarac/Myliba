import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailBookComponent } from './book/detail-book/detail-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { MainComponent } from './main/main.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';

const routes: Routes= [
  { path: 'main', component: MainComponent },
    { path: 'list-user', component: ListUserComponent },
    { path: 'list-book', component: ListBookComponent },
    { path: 'detail-user/:id', component: DetailUserComponent },
    { path: 'detail-book/:id', component: DetailBookComponent },
    { path: 'detail-user/:id/:fullname', component: DetailUserComponent },
    { path: 'detail-book/:id/:fullname', component: DetailBookComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'edit-book', component: EditBookComponent },
    { path: 'edit-user/:id', component: EditUserComponent },
    { path: 'edit-book/:id', component: EditBookComponent },
    { path: '', redirectTo:'main', pathMatch:'full' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
