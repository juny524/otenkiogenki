import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent }   from './app.component';
import { TenkiShosaiComponent } from './tenki-shosai/tenki-shosai.component';
import { KenListComponent } from './ken-list/ken-list.component';

const routes: Routes = [
  // パスに何も指定されないとKenListComponentが起動
  { path: '', component: KenListComponent },
  // パスにnextshosaiが指定されるとTenkiShosaiComponentが起動
  { path: 'nextshosai/:ken_num', component: TenkiShosaiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
