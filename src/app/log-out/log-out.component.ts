import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  message:any;
  constructor() { }

  ngOnInit() {
    localStorage.removeItem('CurrentUser');
    // send to home page
    this.message = "logout";
  }

}
