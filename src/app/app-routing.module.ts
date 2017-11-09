

// import { DeliverContentDashboardComponent } from './../feature-modules/deliver-content/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature-module/home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDashBoardComponent } from './user/user-dash-board/user-dash-board.component';
import { AdminDashBoardComponent } from './user/admin-dash-board/admin-dash-board.component';
import { SuperAdminDashBoardComponent } from './user/super-admin-dash-board/super-admin-dash-board.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path: 'users/user', component: UserDashBoardComponent},
  { path:'users/admin', component: AdminDashBoardComponent},
  { path:'users/sadmin', component: SuperAdminDashBoardComponent},
  { path:'logout', component: LogOutComponent},
  { path:'list', component: ListComponent},
  // { path: 'about', loadChildren: './feature-modules/about-us/about-us.module#AboutUsModule' },
  // { path: 'courses', loadChildren: './feature-modules/deliver-content/deliver-content.module#DeliverContentModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
// export const appRoutingComponents = [AppComponent];
