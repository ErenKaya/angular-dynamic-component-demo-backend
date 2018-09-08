import { iasHtmlComponent } from './ias-html-component';
import { ComponentType } from './component-type';


export class iasHtmlTextArea extends iasHtmlComponent {
	textArea: string;
	constructor(e?: JSON) {
		super();
		this.componentType = ComponentType.TEXTFIELD;
		this.x = e['x'];
		this.y = e['y'];
		this.z = e['z'];
		this.caption = e['caption'];
		this.textArea = e['textArea'];
	}

}