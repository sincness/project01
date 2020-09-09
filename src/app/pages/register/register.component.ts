import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  returnUrl: string;
  error: string;
  title: string = this.route.snapshot.data.title;
  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private TitleService: Title) { }

  ngOnInit() {
  this.TitleService.setTitle(this.title);
    if (this.auth.currentUserValue) this.router.navigate(['/']);
    this.register = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  submit () {
    const userdata = {
      username: this.form.username.value,
      password: this.form.password.value
    }

    if (this.form.username.value && this.form.password.value) {
      this.auth.register(userdata).pipe( first() ).subscribe( data => {
        this.router.navigate([this.returnUrl]);
    },
    error => {
        error.statusText === 'Unauthorized' ? this.error = 'Forkerte brugeroplysninger' : this.error = error.statusText;
        setTimeout(_ => {
            this.error = '';
        }, 2000);
    });
    }

  }

  get form() {
    return this.register.controls;
  }


}
