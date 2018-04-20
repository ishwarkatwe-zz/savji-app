import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  form: any = 'login';

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this._router.navigate(['dashboard']);
  }
}
