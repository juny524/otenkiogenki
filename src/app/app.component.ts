import { Component } from '@angular/core';
import { JsondataService } from './jsondata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'おてんきげんき';

  constructor(private jsondata: JsondataService){
  }

  ngOnInit(): void {
  }

}
