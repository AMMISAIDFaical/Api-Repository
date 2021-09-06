import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  constructor(private http:HttpClient) { }

  name!: string;
  email!: string;
  password!: string;

  AddUser(SignUpform:NgForm) {
    const formData = {
      'name' : SignUpform.value.name,
      'email': SignUpform.value.email,
      'password': SignUpform.value.password
    }
    this.http.post('http://localhost:1028/api/contributer',formData).subscribe();
  }
  ngOnInit(): void {
  }

}
