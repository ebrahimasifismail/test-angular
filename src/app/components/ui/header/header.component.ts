import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private notify: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.authService.userLogout();
    this.router.navigate(['/login']);
  }


}
