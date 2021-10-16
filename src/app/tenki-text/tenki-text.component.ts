import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { Kendata } from '../kendata';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tenki-text',
  templateUrl: './tenki-text.component.html',
  styleUrls: ['./tenki-text.component.css']
})
export class TenkiTextComponent implements OnInit {

  bodyText: string;
  @Input() dataForm: string = "";

  public serviceProp: String = 'Initialized by TenkiTextComponent';
  private subscription!: Subscription;

  constructor(private jsondata: JsondataService) { 
    this.bodyText = "上をクリックすると詳細がここに表示されるよ";
  }

  ngOnInit(): void {
    this.subscription = this.jsondata.sharedDataSource$.subscribe(
      msg => {
        console.log('[Sample1Component] shared data updated.');
        let kendata: Kendata = msg;
        this.bodyText = kendata.bodyText;
      }
    );
  }

}
