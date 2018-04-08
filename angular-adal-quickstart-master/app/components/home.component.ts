import {Component} from '@angular/core';
import {AdalService} from 'ng2-adal/dist/core';

@Component({
  selector: 'home',
  template: '<div protected><h2 *ngIf="adalService.userInfo.isAuthenticated">Hi, {{adalService.userInfo.profile.name}}, {{adalService.userInfo.userName}} {{adalService.userInfo.userPhoto}}</h2><h1>You have successfully logged onto dashboard page.</h1><button (click)="logOut()">Logout</button></div>'
})


export class HomeComponent {

  constructor(
    private adalService: AdalService
  ) {
   console.log('user ', this.adalService.userInfo);
  }

  
  
  public logOut() {
    this.adalService.logOut();
  }
}
	