import { Component, OnInit } from '@angular/core';
import { DataService } from '../../app-service/data-service'

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {
  userData:any= {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getSelfAccount();
  }
  getSelfAccount(){
    this.dataService.getUserCatogory().subscribe(
      data => {
        this.userData = data.data;
        console.log(data);
      },
      error => {

      }
    )
  }
}
