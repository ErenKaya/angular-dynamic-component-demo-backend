import { Component, ComponentFactoryResolver, Compiler, ChangeDetectorRef, ViewChild, ViewContainerRef, Input, ComponentRef } from '@angular/core';

import { iasHtmlComponent } from '../ias-html-component';
import { iasHtmlButton } from '../ias-html-button';
import { DclWrapperComponent } from "../dcl-wrapper/dcl-wrapper.component";

@Component({
  selector: 'app-cresolver',
  templateUrl: './cresolver.component.html',
  styleUrls: ['./cresolver.component.css']
})
export class CresolverComponent {
  @Input() types: any;

  constructor() { }
}
