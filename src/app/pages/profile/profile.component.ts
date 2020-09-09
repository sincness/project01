import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  article: FormGroup;
  returnUrl: string;
  error: string;
  title: string = this.route.snapshot.data.title;
  constructor(private http: HttpService,private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private TitleService: Title) { }

  ngOnInit() {
  this.TitleService.setTitle(this.title);
    this.article = this.fb.group({
      image: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(20)]],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  submit () {
    const data = {
      image: this.form.image.value,
      title: this.form.title.value,
      content: this.form.content.value
    }

    if (this.form.image.value && this.form.title.value && this.form.content.value) {
      this.http.postArticle(data).pipe( first() ).subscribe( data => {
        this.router.navigate([this.returnUrl]);
    },
    error => {
        console.log(error);

        error.statusText === 'Unauthorized' ? this.error = 'Forkerte brugeroplysninger' : this.error = error.statusText;
        setTimeout(_ => {
            this.error = '';
        }, 2000);
    });
    }

  }

  get form() {
    return this.article.controls;
  }

}
