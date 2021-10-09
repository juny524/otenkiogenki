import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { TenkiShosaiComponent } from './tenki-shosai/tenki-shosai.component';
import { KenListComponent } from './ken-list/ken-list.component';
import { Kendata } from './kendata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  private messageSource = new BehaviorSubject(new Kendata);
  kendata = this.messageSource.asObservable();

  constructor() { }

  public changeData(kendata: Kendata): void{
    this.messageSource.next(kendata);
  }

  public getData(): Kendata{
    return this.messageSource.getValue();
  }

  // public get data(): Kendata {
  //   return this.kendata;
  // }
  // public add(kendata: Kendata): void {
  //   this.kendata = kendata;
  // }
  // public delete(index: number): void {
  //   this.kendatas.splice(index, 1);
  // }

}
