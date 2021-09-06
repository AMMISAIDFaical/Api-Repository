import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IContributer } from 'src/app/users/contributer/IContributer';
import { ContributerService } from './contributer.service';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  invalideLogin!: boolean;
  contributerToDisplay!: IContributer;
  $usernameToDisplay = new EventEmitter();

  constructor(private cont_serv: ContributerService,private http:HttpClient , private router : Router) {}

  loginService(credentials:any) {
    this.http.post('http://localhost:1028/api/auth/login', credentials)
    .subscribe(response => {
      localStorage.setItem('jwt', JSON.stringify(response));
      this.router.navigate(["users/contributer"]);
      this.invalideLogin = false;
    }, err => {
      this.invalideLogin = true;
    });
  this.cont_serv.getContributerByName(credentials.email, credentials.password).subscribe(
    contributer => {
      this.contributerToDisplay = contributer;
      this.$usernameToDisplay.emit(contributer.Name);
      localStorage.setItem('username', JSON.stringify(contributer.Name));
    });
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.$usernameToDisplay.emit('');
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }


}


