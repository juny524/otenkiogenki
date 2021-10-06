import { Component, OnInit } from '@angular/core';
import axios from 'axios'


@Component({
  selector: 'app-tenki-shosai',
  templateUrl: './tenki-shosai.component.html',
  styleUrls: ['./tenki-shosai.component.css']
})
export class TenkiShosaiComponent implements OnInit {

  otenkiresult = "わがんね";

  constructor() { 
    this.nara_tenki();
   }

  ngOnInit(): void {
  }


  nara_tenki(): void {
    let api_url: string = "https://weather.tsukumijima.net/api/forecast/city/290010";

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
