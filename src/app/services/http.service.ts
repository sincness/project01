import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { captureException } from '@sentry/core';
import { map, catchError, shareReplay, share } from 'rxjs/operators';

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

interface Response {
  status: boolean;
  error: string;
  item?: RoomItem[];
  items?: RoomItem[];
}

interface GitProject {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks: number;
}

interface Article {
  image: string;
  title: string;
  content: string;
}

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  news$: Observable<Article[]>;
  projects$: Observable<GitProject[]>;
  baseUrl = 'https://api.github.com/users/sincness/repos?per_page=100';
  projects = [
    'hotel-overlook',
    'bageriet',
    'mediesuset'
  ];

  // private cache$: Observable<RoomItem[]>;
  private cache$;




  constructor(private http: HttpClient) {
    // this.getProjects();
    this.getArticles();
   }

   get data() {
    if (!this.cache$) {
      // this.cache$ = this.requestRoom(2).pipe(shareReplay(CACHE_SIZE));
    }

    return this.cache$;
   }

   private requestRoom(id) {
     return this.http.get<Response>(`https://api.mediehuset.net/overlook/rooms/${id}`).pipe(
       map(response => response.item ? response.item : response.items)
     );
   }




  getProjects(): void {
    this.projects$ = this.http.get<GitProject[]>(this.baseUrl).pipe(
      map(projects => projects.filter(project => this.projects.includes(project.name))
      // map(projects => projects.filter(project => project)
      ),
      shareReplay({ bufferSize: 1, refCount: true }),
      catchError(error => of(error))
    ) as Observable<GitProject[]>
  }

  getArticles(): void {
    this.news$ = this.http.get<Article[]>('http://localhost:8080/news').pipe(
    map(articles => articles),
    shareReplay({ bufferSize: 1, refCount: true }),
    catchError(error => of(error))
    ) as Observable<Article[]>
  }

  postArticle(data: object) {
    return this.http.post<any>('http://localhost:8080/news', data)
      .pipe(map(res => {
        return res;
      }));
  }

}
