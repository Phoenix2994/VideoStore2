import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchingTerm: string;

  @Output() movieToSearch = new EventEmitter<string>();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  LogoutUser() {
    this.authService.setLoggedIn(false);
    this.router.navigateByUrl('/login');
  }

  SearchMovie() {
    this.movieToSearch.emit(this.searchingTerm);
  }

}
