import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { CresolverComponent } from './cresolver/cresolver.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAreaComponent,
    ButtonComponent,
    LabelComponent,
    CresolverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
