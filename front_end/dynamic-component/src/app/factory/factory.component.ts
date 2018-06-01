import { IasGeneratorService } from "../ias-generator.service";
import { Component, OnInit, Input } from '@angular/core';
import { iasHtmlComponent } from "../ias-html-component";
import { iasHtmlButton } from "../ias-html-button";
import { iasHtmlLabel } from "../ias-html-label";
import { iasHtmlTextArea } from "../ias-html-text-area";
import { LabelComponent } from "../label/label.component";
import { ButtonComponent } from "../button/button.component";
import { TextAreaComponent } from "../text-area/text-area.component";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  getDataList: string;
  componentList: iasHtmlComponent[] = [];
  @Input() typeList;
  constructor(private iasGeneratorService: IasGeneratorService) { }

  ngOnInit() {
  }

  showComponents() {
    this.iasGeneratorService.getToGenerateComponent()
      .subscribe(
        data => this.getDataList = JSON.stringify(data),
        error => alert(error),
        () => console.log("Get Request completed"));
  }

  drawComponents() {
    JSON.parse(this.getDataList).array.forEach(e => {
      if (e['compenentType'] === "BUTTON") {
        this.typeList.push(new ButtonComponent(new iasHtmlButton(e)));
      } else if (e['compenentType'] === "LABEL") {
        this.typeList.push(new LabelComponent(new iasHtmlLabel(e)));
      } else if (e['compenentType'] === "TEXTFIELD") {
        this.typeList.push(new TextAreaComponent(new iasHtmlTextArea(e)));
      }
    });
  }

}
