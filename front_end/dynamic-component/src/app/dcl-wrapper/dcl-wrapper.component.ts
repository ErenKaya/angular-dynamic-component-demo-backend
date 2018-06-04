import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, Compiler, ChangeDetectorRef } from '@angular/core';
import { FactoryComponent } from '../factory/factory.component';
import { ButtonComponent } from '../button/button.component';
import { LabelComponent } from '../label/label.component';
import { TextAreaComponent } from '../text-area/text-area.component';
import { iasHtmlTextArea } from '../ias-html-text-area';

@Component({
  selector: 'dcl-wrapper',
  templateUrl: './dcl-wrapper.component.html',
  styleUrls: ['./dcl-wrapper.component.css']
})
export class DclWrapperComponent {

  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() comp;
  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
    private cdRef: ChangeDetectorRef) { }
  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    var factory = null;
    factory = this.componentFactoryResolver.resolveComponentFactory(this.comp);

    this.cmpRef = this.target.createComponent(factory);
    // to access the created instance use
    // this.compRef.instance.someProperty = 'someValue';
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
    this.cdRef.detectChanges();
  }




  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
