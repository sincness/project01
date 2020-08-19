import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  // data;

  constructor(public http: HttpService) { }

  async ngOnInit() {
    // Her hidkalder vi uden problemer vores getter
    // der ligger bundet på Http Servicen, som vi
    // så vælger at servere ved hjælp af et Promise

    // this.data = await this.http.data.toPromise();

    // console.log(this.data);
  }

}
