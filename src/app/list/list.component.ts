import { Component, OnInit } from '@angular/core';
import { DataService } from '../app-service/data-service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userData: any;
  constructor( private dataService:DataService) { }

  ngOnInit() {
    this.getListVehicleByCatogory();
  }

  getListVehicleByCatogory() {
      this.dataService.getAllUserList().subscribe(
        data => {
          console.log(data);
          this.userData = data;
        },
          error => {

          });
  }

}
