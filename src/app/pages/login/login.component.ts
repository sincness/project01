import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  returnUrl: string;
  error: string;

  constructor(private auth: AuthService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.auth.currentUserValue) this.router.navigate(['/']);
    this.login = this.fb.group({
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
      this.auth.login(userdata).pipe( first() ).subscribe( data => {
        this.router.navigate([this.returnUrl]);
    },
    error => {
        error.statusText === 'Unauthorized' ? this.error = 'Forkerte brugeroplysninger' : this.error = error.statusText;
        // this.error = error.statusText;
        setTimeout(_ => {
            this.error = '';
        }, 2000);
    });
    }
    
  }

  get form() {
    return this.login.controls;
  }

}
