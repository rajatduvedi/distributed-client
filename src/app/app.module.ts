import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './feature-module/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
// import {MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './common-modules/app-material.module';
import { DataService } from './app-service/data-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashBoardComponent } from './user/user-dash-board/user-dash-board.component';
import { AdminDashBoardComponent } from './user/admin-dash-board/admin-dash-board.component';
import { SuperAdminDashBoardComponent } from './user/super-admin-dash-board/super-admin-dash-board.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ListComponent } from './list/list.component';
// import { UserDahBoardComponent } from './user/user-dah-board/user-dah-board.component';
// import { AdminDahBoardComponent } from './user/admin-dah-board/admin-dah-board.component';
// import { DashboardComponent } from './user/sadmin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserDashBoardComponent,
    AdminDashBoardComponent,
    SuperAdminDashBoardComponent,
    LogOutComponent,
    ListComponent,
    // UserDahBoardComponent,
    // AdminDahBoardComponent,
    // DashboardComponent,
  ],
  imports: [
    BrowserModule,
    // MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
