import { Component, OnInit, ComponentFactoryResolver, Compiler, ChangeDetectorRef, ViewChild, ViewContainerRef, Input, ComponentRef } from '@angular/core';

import { iasHtmlComponent } from '../ias-html-component';
import { iasHtmlButton } from '../ias-html-button';

@Component({
  selector: 'app-cresolver',
  templateUrl: './cresolver.component.html',
  styleUrls: ['./cresolver.component.css']
})
export class CresolverComponent implements OnInit {
  button: iasHtmlButton;

  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() type: iasHtmlComponent;
  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private compiler: Compiler,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  createComponents(componentList: iasHtmlComponent[]){

  }

  

}
