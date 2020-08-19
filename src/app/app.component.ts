import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  images = ['../../../assets/svg/logo.svg', 'https://www.vectorportal.com/img_novi/roads-and-cars-vectorportal.jpg', 'https://www.vectorportal.com/img_novi/business-analytics-vector.jpg'];
  title = 'project01';

}
