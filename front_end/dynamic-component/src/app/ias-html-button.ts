import { iasHtmlComponent } from './ias-html-component';
import { ComponentType } from './component-type';

export class iasHtmlButton extends iasHtmlComponent{
	buttonColor: string;
	  constructor(private e: JSON) {
	  	super();
		  this.componentType = ComponentType.BUTTON;
		  this.x = e['x'];
		  this.y = e['y'];
		  this.z = e['z'];
		  this.caption = e['caption'];
		  this.buttonColor = e['buttonColor'];
	   }

}