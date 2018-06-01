import { Component, OnInit } from '@angular/core';
import { iasHtmlTextArea } from '../ias-html-text-area';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {

  constructor(textArea: iasHtmlTextArea) { }

  ngOnInit() {
  }

}
