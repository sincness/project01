import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss']
})
export class ConsentComponent implements OnInit {
  state = this.cookie.get('cookie') ? this.cookie.get('cookie') : null;
  constructor(private cookie: CookieService) { }
  @ViewChild('cookieContainer') cookieContainer;
  ngOnInit(): void {
  }

  accept() {
    this.cookie.set('cookie', 'accepted');
    this.cookieContainer.nativeElement.classList.remove('active');
  }


}
