import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenkiShosaiComponent } from './tenki-shosai/tenki-shosai.component';
import { KenListComponent } from './ken-list/ken-list.component';
import { JsondataService } from './jsondata.service';
import { TenkiTextComponent } from './tenki-text/tenki-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TenkiShosaiComponent,
    KenListComponent,
    TenkiTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JsondataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
