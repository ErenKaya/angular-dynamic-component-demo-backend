import { Component, OnInit } from '@angular/core';
import { iasHtmlButton } from '../ias-html-button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(buton: iasHtmlButton) { }

  ngOnInit() {
  }

}
