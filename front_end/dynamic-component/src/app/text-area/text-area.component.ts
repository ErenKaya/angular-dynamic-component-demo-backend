import { Component, OnInit, NgModule } from '@angular/core';
import { iasHtmlTextArea } from '../ias-html-text-area';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  
})

export class TextAreaComponent   implements OnInit {
  textArea: string;
  constructor(textArea: iasHtmlTextArea) {
    this.textArea = '<input type="text"   value="'+textArea.textArea+'" style="position: absolute; left:'+textArea.x+'px;top:'+textArea.y+'px;">'+textArea.caption+'</input><br>' 
   }
   
  ngOnInit() {
  }

}
