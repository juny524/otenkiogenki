import { Component } from '@angular/core';
import { JsondataService } from './jsondata.service';
import { Kendata } from './kendata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'おてんきげんき';
  private kendata: Kendata;
  private kendatas: Kendata[];

  constructor(
    private jsondataService: JsondataService
  ){
    this.kendata = new Kendata;
    this.kendatas = this.jsondataService.list;
  }

  ngOnInit(): void {
  }
  public onSubmit(): void {
    this.jsondataService.add(this.kendata);
    this.kendata = new Kendata;
  }
  public onDelete(index: number): void {
    this.jsondataService.delete(index);
  }

}
