import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { interval, Observable, ObjectUnsubscribedError } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

interface Facilities {
  id?: string;
  title?: string;
  category?: string;
}

interface Images {
  id?: string;
  title?: string;
  image?: string;
}

interface RoomItem {
  id: string;
  title: string;
  description: string;
  num_persons: string;
  area: string;
  day_price_normal: string;
  day_price_flex: string;
  num_images: number;
  images: Images[];
  num_facilities: number;
  facilities: Facilities[];
}

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {
  dato : Date | any = new Date();
  seconds = 27;

  images = ['../../../assets/img/ffrontend.png', '../../../assets/img/fbackend2.png', '../../../assets/img/others.png'];
  test = [
    {id: 0, name: 'Abekat', balance: 100, timestamp: 1598753812},
    {id: 1, name: 'Blasldlasld', balance: 333, timestamp: 1598753312},
    {id: 2, name: 'LASDLA', balance: 902, timestamp: 1598753212},
    {id: 3, name: 'Malthe', balance: 5, timestamp: 1598753812},
    {id: 4, name: 'DLASDL', balance: 7223, timestamp: 1598751382},
    {id: 5, name: 'Jesper', balance: 888, timestamp: 1598753612},
    {id: 6, name: 'Peter', balance: 1, timestamp: 1598753212},
    {id: 7, name: 'Oliver', balance: 0, timestamp: 1598753810},
    {id: 8, name: 'Lukas', balance: 5000000, timestamp: 1598751812},
  ];
  title = this.route.snapshot.data.title;
  constructor(public http: HttpService, private route: ActivatedRoute, private titleService: Title) { }

  async ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  yolo() {
    // console.log(x);

    let observable = interval(1000);

    observable.pipe(takeWhile(value => value < 20)).subscribe(
      (value: number) => {
        this.seconds = value;
        console.log(this.seconds);


      },
      (error: any) => {
        console.log('error');
      },
      () => {
        console.log('observable completed !');
      }
    );
    // interval(1000).subscribe(x => x, err => err, () => {})

  }

  sortTimestamp() {
    this.test.sort((a, b) => <any>new Date(a.timestamp) - <any>new Date(b.timestamp))
  }

  sortId() {
    this.test.sort((a, b) => (a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0);
  }
  reverse() {
    this.test.reverse();
  }
  sortName() {
    this.test.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0);
  }
  sortBalance() {
    this.test.sort((a, b) => (a.balance < b.balance) ? -1 : (a.balance > b.balance) ? 1 : 0);
  }
  /**
   *
   * @param date Date object
   *
   * Convert date object to timestamp
   */

  toTimestamp = date => {
    return Date.parse(date);
  }
  /**
   *
   * @param date Date object
   *
   * Convert date object to unix timestamp
   */

  toUnixTimestamp = date => {
    return Math.round(date.getTime()/1000);
  }

  /**
   *
   * @param timestamp Timestamp
   */
  timestampToDate(timestamp) {
    return new Date(timestamp).toLocaleDateString('da-dk', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  }
  /**
   *
   * @param timestamp Unix Timestamp
   */
  unixTimestampToDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleDateString('da-dk', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  }


}
