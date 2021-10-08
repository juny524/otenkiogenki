import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenkiShosaiComponent } from './tenki-shosai/tenki-shosai.component';
import { KenListComponent } from './ken-list/ken-list.component';
import { JsondataService } from './jsondata.service';

@NgModule({
  declarations: [
    AppComponent,
    TenkiShosaiComponent,
    KenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JsondataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
