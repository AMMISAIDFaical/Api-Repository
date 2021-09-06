import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { SigninComponent } from './auth/signin/signin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  usernameForLable: string | undefined;

  constructor(private auth_serv: AuthService) {
    this.usernameForLable = localStorage.getItem('usernameForLable') || '';
  }

  username = (localStorage.getItem('username')||'');
 


  ngOnInit() {
    this.auth_serv.$usernameToDisplay.subscribe((data)=>{
        this.usernameForLable = data;
    },err => {
      console.log('non valide login')
    });

  }

  title = 'Apistore';

  logout() {
    this.auth_serv.logout();

  }

  getUser() {

  }

}
