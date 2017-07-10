import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RootPageService } from './rootpage.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {

  rootPage: any;

  constructor(
    private rootPageService: RootPageService,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.rootPageService.rootPage
      .subscribe(res => this.rootPage = res) 
  }
}
