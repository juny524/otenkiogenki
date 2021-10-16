import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { TenkiShosaiComponent } from './tenki-shosai/tenki-shosai.component';
import { KenListComponent } from './ken-list/ken-list.component';
import { Kendata } from './kendata';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs'
import { Subject } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  private messageSource = new BehaviorSubject(new Kendata);
  kendata = this.messageSource.asObservable();

  private sharedDataSource = new Subject<Kendata>();
  public sharedDataSource$ = this.sharedDataSource.asObservable();

  constructor() { }

  public onNotifySharedDataChanged(updateed: Kendata) {
    console.log('[CommonService] onNotifySharedDataChanged fired.');
    this.sharedDataSource.next(updateed);
  }
}
