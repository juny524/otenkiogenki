import { Component, OnInit } from '@angular/core';
import { JsondataService } from '../jsondata.service';
import { Kendata } from '../kendata';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tenki-text',
  templateUrl: './tenki-text.component.html',
  styleUrls: ['./tenki-text.component.css']
})
export class TenkiTextComponent implements OnInit {

  bodyText: string;
  @Input() dataForm: string = "";

  constructor(private jsondata: JsondataService) { 
    this.bodyText = "gaergar";
  }

  ngOnInit(): void {
    
  }

  onClick() {
    this.bodyText = this.jsondata.getData().chiho_mei;
  }

}
