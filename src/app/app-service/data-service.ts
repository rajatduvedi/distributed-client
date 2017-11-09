import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, ResponseOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class DataService{
  private loginUrl = 'http://localhost:3000/api/login';
  private roleUrl = 'http://localhost:3000/api/getRoleById';
  private vehicleListUrl = 'http://localhost:3000/api/getAllCreateVehicle'
  private createUserUrl = 'http://localhost:3000/api/addUser';
  private listuserUrl = 'http://localhost:3000/api/getListUserByCatogory';
  private userUrl = 'http://localhost:3000/api/getUserCatogory';
  private options: any;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private http: Http){
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // this.options = new RequestOptions({ headers: headers });
  }

  getCurrentUserFromLocalStorage() {
    if (localStorage.getItem('CurrentUser')) {
      return JSON.parse(localStorage.getItem('CurrentUser'));
    } else {
      return '';
    }

  }

  authenticateUser(item){
    console.log(item);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(this.loginUrl, item, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  getUserRole(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    const user = this.getCurrentUserFromLocalStorage();
    console.log(user.roles);
    return this.http.get(this.roleUrl + '/' + user.roles, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });

  }

  getAllCreateVehicle() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.get(this.vehicleListUrl , { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  createUser(item) {
    console.log(item);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(this.createUserUrl, item, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  getAllUserList() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    const user = this.getCurrentUserFromLocalStorage();
    console.log(user.roles);
    return this.http.get(this.listuserUrl + '/' + user.roles, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });

  }

  getUserCatogory(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    const user = this.getCurrentUserFromLocalStorage();
    console.log(user.roles);
    return this.http.get(this.userUrl + '/' + user._id, { headers: headers })
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

}
