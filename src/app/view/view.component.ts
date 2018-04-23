import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log(this.getAverageRGB('cover'));
  }

  getAverageRGB(imgEl) {

   return '';
  }

}
