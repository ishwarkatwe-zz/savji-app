import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss']
})
export class AutosuggestComponent implements OnInit {

  @Output() close =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit(true);
  }

}
