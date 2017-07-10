import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class RootPageService {

  private currentSession: any;
  private session: any = window.sessionStorage;
  public _rootPage: BehaviorSubject<any> = new BehaviorSubject('');
  public rootPage: Observable<any> = this._rootPage.asObservable();

  constructor() {
    this.session.user ? this.currentSession = JSON.parse(this.session.user) : this.currentSession = null;
    this.currentSession !== null ? this._rootPage.next('TabsPage') : this._rootPage.next('login');
  }
}