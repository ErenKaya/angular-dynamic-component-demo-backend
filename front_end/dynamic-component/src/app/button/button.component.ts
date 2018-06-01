import { Component, OnInit } from '@angular/core';
import { iasHtmlButton } from '../ias-html-button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonString: string;
  constructor(button: iasHtmlButton) {
    this.buttonString = '<button name="'+button.buttonColor+'" type="button" style="position:absolute; left: '+ button.x +'px; top: ' + button.y+'px;  ">'+button.caption+'</button>';
   }

  ngOnInit() {
  }

}
