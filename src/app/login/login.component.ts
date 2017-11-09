import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../app-service/data-service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private dataService: DataService) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginFormGroup.valid) {
      const userId = this.loginFormGroup.value.userId;
      const password = this.loginFormGroup.value.password;
      this.dataService.authenticateUser({userId, password}).subscribe(
        data => {
          console.log(data.data);
          localStorage.setItem('CurrentUser', JSON.stringify(data.data));
          this.dataService.getUserRole().subscribe(
            datarole => {
              localStorage.setItem('UserRole', JSON.stringify(datarole));
              console.log(datarole.data.role_name);
              if ((datarole.data.role_name)) {
                const url = this.getUserDashboardUrl(datarole.data.role_name);
                console.log('navigating to url');
                console.log(url);
                this.router.navigate([url]);
              } else {
                this.router.navigate(['login']);
              }
            }
          );

        }
      );
    }
  }
  getUserDashboardUrl(roles) {
    if (roles) {
      if (roles == 'superadmin') {
        return 'users/sadmin';
      }
      if (roles == 'admin') {
        return 'users/admin';
      }
      if (roles == 'user') {
        return 'users/user';
      }
    }
  }

}
