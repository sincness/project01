import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  title = this.route.snapshot.data.title;
  constructor(public http: HttpService, private route: ActivatedRoute, private TitleService: Title) { }

  async ngOnInit() {
    this.TitleService.setTitle(this.title);
  }

}
