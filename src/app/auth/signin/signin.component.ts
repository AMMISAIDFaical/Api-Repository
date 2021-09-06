import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IContributer } from 'src/app/users/contributer/IContributer';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router,private auth_serv : AuthService) { }

  email!: string;
  password!: string;
  invalideLogin!: boolean;
  contributerToDisplay!: IContributer;
  $usernameToDisplay = new EventEmitter();

  login(form: NgForm) {
    const credentials =
    {
      'email': form.value.email,
      'password': form.value.password
    }
    this.auth_serv.loginService(credentials);

  }

  rediToSingUp() {
    this.router.navigate(["auth/signup"]);
  }

  ngOnInit() {

  }
}
