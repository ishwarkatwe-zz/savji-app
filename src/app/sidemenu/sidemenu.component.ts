import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Output() close =  new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit(true);
  }

}
