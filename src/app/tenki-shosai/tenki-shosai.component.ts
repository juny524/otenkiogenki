import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-tenki-shosai',
  templateUrl: './tenki-shosai.component.html',
  styleUrls: ['./tenki-shosai.component.css']
})
export class TenkiShosaiComponent implements OnInit {

  otenkiresult = "わがんね";

  constructor(private activatedRoute: ActivatedRoute) { 
    // this.nara_tenki();
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

      console.info('token: 一応見れたかな？' + tenki_json_obj["forecasts"][0]["telop"] );
      this.otenkiresult = tenki_json_obj["title"] + "は" + tenki_json_obj["forecasts"][0]["telop"];
    })
    .catch((e) => {
      if (e.response !== undefined) {
        console.error(e.response.data.error + "エラーになりました");
      }
    });



    // this.items.push(api_url);
  }


}
