import { Component, OnInit } from '@angular/core';
import { iasHtmlButton } from '../ias-html-button';
import { iasHtmlLabel } from '../ias-html-label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  constructor(label: iasHtmlLabel ) { }

  ngOnInit() {
  }

}
