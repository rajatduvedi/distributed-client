import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-dash-board',
  templateUrl: './super-admin-dash-board.component.html',
  styleUrls: ['./super-admin-dash-board.component.css']
})
export class SuperAdminDashBoardComponent implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit() {
  }
  createUser(){
    this.router.navigate(['/home']);
  }
  listShow(){
    this.router.navigate(['/list']);
  }
}
