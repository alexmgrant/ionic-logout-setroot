import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'login',
  segment: 'login',
  priority: 'high'
})
@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  public sessionStorage: any;

  constructor(public navCtrl: NavController) {
    this.sessionStorage = window.sessionStorage;
  }

  userSetup() {
    this.sessionStorage.user = JSON.stringify({ name: 'Hey Mike!' });
    this.navCtrl.setRoot('TabsPage');
  }
}
