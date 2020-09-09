import { Directive, ElementRef } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';

@Directive({
  selector: '[cookie]'
})
export class CookieDirective {
  state = this.cookie.get('cookie') ? this.cookie.get('cookie') : null;

  constructor(private elm: ElementRef, private cookie: CookieService) {
    if (this.state !== null ) return;
    setTimeout(_ => {
      elm.nativeElement.classList.add('active');
    }, 250);
  }

}
