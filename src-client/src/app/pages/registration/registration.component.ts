import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  windowHeight = 0;
  boxShadow = 'none';

  constructor() {}

  private getWindowHeigh() {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    );
  }

  private getBoxShadow() {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const shadowWidth = windowWidth / 3;
    return 'inset 0 0 ' + shadowWidth + 'px rgba(0, 0, 0, 0.5)';
  }

  ngOnInit() {
    this.windowHeight = this.getWindowHeigh();
    this.boxShadow = this.getBoxShadow();
  }

  onResize(event) {
    this.windowHeight = this.getWindowHeigh();
    this.boxShadow = this.getBoxShadow();
  }

  onSubmit() {}
}
