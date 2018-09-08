import { Component, OnInit, NgModule, Input } from '@angular/core';
import { iasHtmlTextArea } from '../ias-html-text-area';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  
})

export class TextAreaComponent   implements OnInit {
  @Input() e: TextAreaComponent;
  constructor() {
   }
   
  ngOnInit() {
  }

}
