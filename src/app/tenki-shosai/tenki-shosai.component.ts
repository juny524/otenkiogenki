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

  private subscription!: Subscription;
  private kendata: Kendata = new Kendata;

  constructor(private activatedRoute: ActivatedRoute, private jsondata: JsondataService) { 
    // this.nara_tenki();
    // this.kendata = new Kendata;
   }

  ngOnInit(): void {

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
      
      // console.info('token: 一応見れたかな？' + tenki_json_obj["forecasts"][0]["telop"] );
      this.kendata.result = true;
      this.kendata.chiho_mei =  tenki_json_obj["title"];
      this.kendata.tenki = tenki_json_obj["forecasts"][0]["telop"];
      this.kendata.time = tenki_json_obj["publicTimeFormatted"];
      this.kendata.bodyText = tenki_json_obj["description"]["bodyText"];
      this.otenkiresult = this.kendata.time + " 現在の " + this.kendata.chiho_mei + " は " + this.kendata.tenki;
      
      

    })
    .catch((e) => {
      if (e.response !== undefined) {
        console.error(e.response.data.error + "エラーになりました");
      }
      this.kendata.result = false;
    })
    .finally(() => {
    });



    // this.items.push(api_url);
  }

  onClicSendMessage() {
    // CommonService のデータ更新を行う
    console.log('[Sample1Component] onClicSendMessage fired.');
    this.jsondata.onNotifySharedDataChanged(this.kendata);
  }


}
