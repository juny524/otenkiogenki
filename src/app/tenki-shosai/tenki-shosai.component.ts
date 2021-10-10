import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JsondataService } from '../jsondata.service';
import { Kendata } from '../kendata';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tenki-shosai',
  templateUrl: './tenki-shosai.component.html',
  styleUrls: ['./tenki-shosai.component.css']
})
export class TenkiShosaiComponent implements OnInit {

  otenkiresult = "わがんね";

  public serviceProp: String = 'Initialized by TenkiShosaiComponent';
  private subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private jsondata: JsondataService) { 
    // this.nara_tenki();
    // this.kendata = new Kendata;
    this.jsondata = new JsondataService();
   }

  ngOnInit(): void {

    this.subscription = this.jsondata.sharedDataSource$.subscribe(
      msg => {
        console.log('[Sample1Component] shared data updated.');
        this.serviceProp = msg;
      }
    );

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // ルーティングモジュールの「:id」部分の定義により、'id' で取得できる
      const ken_num = params.get('ken_num');
      if(ken_num){
        this.tenki(ken_num);
      }
    });
  }


  tenki(ken_num: string): void {
    let api_url: string = "https://weather.tsukumijima.net/api/forecast/city/" + ken_num;
   

    axios.get(
      api_url
    )
    .then(res => {
      let tenki_json_obj = res.data;

      let kendata: Kendata = new Kendata;
      
      // console.info('token: 一応見れたかな？' + tenki_json_obj["forecasts"][0]["telop"] );
      kendata.result = true;
      kendata.chiho_mei =  tenki_json_obj["title"];
      kendata.tenki = tenki_json_obj["forecasts"][0]["telop"];
      kendata.time = tenki_json_obj["publicTimeFormatted"];
      kendata.bodyText = tenki_json_obj["description"]["bodyText"];
      this.jsondata.changeData(kendata);
      

    })
    .catch((e) => {
      if (e.response !== undefined) {
        console.error(e.response.data.error + "エラーになりました");
      }
      let kendata: Kendata = new Kendata;
      kendata.result = false;
      this.jsondata.changeData(kendata);
    })
    .finally(() => {
      if(this.jsondata.getData().result){
        this.otenkiresult = this.jsondata.getData().time + " 現在の " + this.jsondata.getData().chiho_mei + " は " + this.jsondata.getData().tenki;
      }
    });



    // this.items.push(api_url);
  }

  onClicSendMessage() {
    // CommonService のデータ更新を行う
    console.log('[Sample1Component] onClicSendMessage fired.');
    this.jsondata.onNotifySharedDataChanged('Updated by Sample1Component.');
  }


}
