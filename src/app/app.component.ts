import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project01';
  constructor(private http: HttpService, private titleService: Title) {

  }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
