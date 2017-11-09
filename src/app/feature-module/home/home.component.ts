import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../../app-service/data-service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    userFormGroup: FormGroup;
    roles = [
    ];
    vehicle: any;
    model: any;
    currentUser: any;
    message :any;
    UserRole:any;

  constructor( private formBuilder: FormBuilder , private dataService: DataService) { }

  ngOnInit() {
    this.UserRole = JSON.parse(localStorage.getItem('UserRole'));
    console.log(this.UserRole);
    if(this.UserRole.data.role_name == 'superadmin'){
      this.roles = [
        'admin',
        'user'
      ]
    }
    if(this.UserRole.data.role_name == 'admin'){
      this.roles = [
        'user'
      ]
    }
    this.userFormGroup = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      roles: ['',Validators.required],
      email:['',Validators.required],
      vehicle:this.formBuilder.array([]),
      userRole: [''],
    });
    this.getAllCreateVehicle();
  }

  getAllCreateVehicle(){
    this.dataService.getAllCreateVehicle().subscribe(
      data => {
        console.log(data);
        this.vehicle = data;
        for (const item of data){
          console.log(item);
          const control = new FormControl(false, Validators.required);
          (<FormArray>this.userFormGroup.get('vehicle')).push(control);
        }
      },
      error => {
        console.log(error);
      });
  }

  submit() {
    console.log(this.userFormGroup.value);
    this.model = this.userFormGroup.value;
    // this.model.vehicle = [];
    console.log(this.model);
    if(this.userFormGroup.value.vehicle) {
      for(var i = 0 ; i< this.userFormGroup.value.vehicle.length ; i++ ){
        // console.log(this.userFormGroup.value.vehicle[i]);
        if(this.userFormGroup.value.vehicle[i] == true) {
          this.model.vehicle[i] = this.vehicle[i].vehicle_Name;
          console.log(this.model.vehicle)
        } else {
          this.model.vehicle.splice(i,1)
        }

      }
    }
    this.currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
    this.model.userRole = this.currentUser.roles;
    this.dataService.createUser(this.model).subscribe(
      data => {
          console.log(data);
          // this.message = data.
      }, error => {

      });
    console.log(this.model);
  }

}
