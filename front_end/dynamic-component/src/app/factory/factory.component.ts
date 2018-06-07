import { IasGeneratorService } from "../ias-generator.service";
import { Component, OnInit, Input } from '@angular/core';
import { iasHtmlComponent } from "../ias-html-component";
import { iasHtmlButton } from "../ias-html-button";
import { iasHtmlLabel } from "../ias-html-label";
import { iasHtmlTextArea } from "../ias-html-text-area";
import { LabelComponent } from "../label/label.component";
import { ButtonComponent } from "../button/button.component";
import { TextAreaComponent } from "../text-area/text-area.component";
import { CresolverComponent } from "../cresolver/cresolver.component";
import { Button } from "protractor";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent  {

  getDataList: string;
  componentList: iasHtmlComponent[] = [];
  typeList: any[] = [];
  constructor(private iasGeneratorService: IasGeneratorService) { }

  showComponents() {
    //Servis Bağlantısı Devre Dışı:
    /* this.iasGeneratorService.getToGenerateComponent()
       .subscribe(
         data => this.getDataList = JSON.stringify(data),
         error => alert(error),
         () => console.log("Get Request completed"));*/
    this.getDataList = '[{"caption":"Label 1","x":1,"z":1,"y":1,"componentType":"LABEL","text":"Label text 1"},{"caption":"TextField 2","x":6,"z":6,"y":6,"componentType":"TEXTFIELD","textArea":"TextField1 2"},{"caption":"Button 3","x":6,"z":6,"y":6,"componentType":"BUTTON","buttonColor":"Button color3"},{"caption":"TextField 4","x":12,"z":12,"y":12,"componentType":"TEXTFIELD","textArea":"TextField1 4"},{"caption":"Label 5","x":5,"z":5,"y":5,"componentType":"LABEL","text":"Label text 5"},{"caption":"TextField 6","x":18,"z":18,"y":18,"componentType":"TEXTFIELD","textArea":"TextField1 6"},{"caption":"Label 7","x":7,"z":7,"y":7,"componentType":"LABEL","text":"Label text 7"}]';

  }

  drawComponents() {

    JSON.parse(this.getDataList).forEach(e => {

      if (e['componentType'] === "BUTTON") {
        this.typeList.push(new iasHtmlButton(e));
        
      } else if (e['componentType'] === "LABEL") {
        this.typeList.push(new iasHtmlLabel(e));
      } else if (e['componentType'] === "TEXTFIELD") {
        this.typeList.push(new iasHtmlTextArea(e));
      }
    });

  }

}
