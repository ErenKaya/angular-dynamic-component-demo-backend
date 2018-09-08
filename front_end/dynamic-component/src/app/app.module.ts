import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { HttpClientModule } from '@angular/common/http';
import { TextAreaComponent } from './text-area/text-area.component';
import { FactoryComponent } from './factory/factory.component';
import { CresolverComponent } from './cresolver/cresolver.component';
import { DclWrapperComponent } from './dcl-wrapper/dcl-wrapper.component';

@NgModule({
  declarations: [
    TextAreaComponent,
    ButtonComponent,
    LabelComponent,
    AppComponent,
    FactoryComponent,
    CresolverComponent,
    DclWrapperComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [ButtonComponent,LabelComponent,TextAreaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
