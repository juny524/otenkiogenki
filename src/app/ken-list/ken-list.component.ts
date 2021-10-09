import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ken-list',
  templateUrl: './ken-list.component.html',
  styleUrls: ['./ken-list.component.css']
})
export class KenListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  tenki_view(ken_num: number): void{
    this.router.navigate(['/nextshosai', ken_num]);
  }

}
