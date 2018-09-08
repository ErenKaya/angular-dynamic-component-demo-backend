import { Component, OnInit, Input } from '@angular/core';
import { iasHtmlButton } from '../ias-html-button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {
  @Input() e: iasHtmlButton;
  buttonString: string;
  constructor() {
    // this.buttonString = '<button name="'+button.buttonColor+'" type="button" style="position:absolute; left: '+ button.x +'px; top: ' + button.y+'px;  ">'+button.caption+'</button>';
   }


}
