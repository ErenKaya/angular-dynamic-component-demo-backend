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
    let component = this.getComponentType(this.comp);
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentType(this.comp));

    this.cmpRef = this.target.createComponent(factory);
    // to access the created instance use
    this.cmpRef.instance.e = this.comp;
    // this.compRef.instance.someOutput.subscribe(val => doSomething());
    this.cdRef.detectChanges();
  }


   getComponentType(component: any): any{

     if(component.componentType.value === 0){
       return LabelComponent; 
     }else if(component.componentType.value === 2){
      return ButtonComponent;
     }else if(component.componentType.value ===1){
      return TextAreaComponent;
     }
    //  switch(component.componentType){
    //    case 0:{
    //      console.log("button döndü");
    //      return ButtonComponent;
    //      break;
    //    }
    //    case 1: {
    //     console.log("button döndü");
    //      return LabelComponent;
    //      break;
    //    }
    //    case 2:
    //    return TextAreaComponent;
    //    break;
    //  }
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
