import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

  }

  LoginUser() {
    if (this.email === 'miamail@gmail.com' && this.password === 'miapassword') {
      this.authService.isLoggedIn = true;
      this.router.navigateByUrl('/dashboard');
    }
  }

}
