import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import { MainComponent } from './main/main.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { DetailBookComponent } from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListUserComponent,
    EditUserComponent,
    DetailUserComponent,
    MainComponent,
    ListBookComponent,
    EditBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
