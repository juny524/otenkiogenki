import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { TenkiShosaiComponent } from './tenki-shosai/tenki-shosai.component';
import { KenListComponent } from './ken-list/ken-list.component';
import { Kendata } from './kendata';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  private kendatas: Kendata[] = [];

  constructor() { }

  public get list(): Kendata[] {
    return this.kendatas;
  }
  public add(kendata: Kendata): void {
    this.kendatas.push(kendata);
  }
  public delete(index: number): void {
    this.kendatas.splice(index, 1);
  }

}
