import { Component, OnInit } from '@angular/core';
import { iasHtmlButton } from '../ias-html-button';
import { iasHtmlLabel } from '../ias-html-label';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {
  labelString: string;
  constructor(label: iasHtmlLabel ) { 
    this.labelString = '<label name="'+label.text+'"  style="position: absolute; left: '+label.x+'px; top: '+label.y+'px; ">'+label.caption+'</label>'
  }

  ngOnInit() {
  }

}
