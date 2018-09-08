import { iasHtmlComponent } from './ias-html-component';
import { ComponentType } from './component-type';


export class iasHtmlLabel extends iasHtmlComponent{
	text: string;
	  constructor(e: JSON) {
	  	super();
		  this.componentType = ComponentType.LABEL;
		  this.x = e['x'];
		  this.y = e['y'];
		  this.z = e['z'];
		  this.caption = e['caption'];
		  this.text = e['text'];
	   }

}