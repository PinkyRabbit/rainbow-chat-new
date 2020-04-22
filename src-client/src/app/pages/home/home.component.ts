import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { LoginComponent } from './login/login.component';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  // login: LoginComponent;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Главная ✔ Rainbow chat');
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // let newUser = new User(
    //   this.f.username.value,
    //   this.f.password.value,
    //   '',
    //   false,
    //   ''
    // );
    // this.loading = true;
    // this.authenticationService
    //   .login(newUser)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['campaign']);
    //     },
    //     error => {
    //       this.error = 'Error Occured.';
    //       this.loading = false;
    //     }
    //   );
  }
}
