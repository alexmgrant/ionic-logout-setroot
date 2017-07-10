import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RootPageService } from '../../app/rootpage.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private sessionStorage: any;

  constructor(
    public navCtrl: NavController,
    private rootPageService: RootPageService) {
    this.sessionStorage = window.sessionStorage;
  }

  logout() {
    // was trying to set rootPage prop found in app.component.ts dynamically.
    // this.rootPageService._rootPage.next('login');;

    this.sessionStorage.removeItem('user');

    // this will stop the url from appending new state to the end.
    // however the url remains /tabs and the root of the nav stack is not for the entire app, just the current tab
    this.navCtrl.parent = null;
    this.navCtrl.setRoot('login');
  }
}
