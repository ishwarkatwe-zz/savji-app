import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  menu: boolean;

  constructor() {
  }

  ngOnInit() {
    this.menu = false;
  }

  onClose(e) {
    this.menu = false;
  }
}
