import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AdalService} from 'ng2-adal/dist/core';

@Component({
  selector: 'welcome',
  template: '<h1>Welcome to ModelBank!</h1><button (click)="logIn()">Login</button>'
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private adalService: AdalService
  ) {
    console.log('Entering welcome', this.adalService.userInfo);

    if (this.adalService.userInfo.isAuthenticated) {
		console.log('user mil gya, bro', this.adalService.userInfo);
				
      this.router.navigate(['/home']);
    }
  }

  public ngOnInit() {
    console.log('ngOnInit is called');
  }

  public logIn() {
    this.adalService.login();
  }
}
