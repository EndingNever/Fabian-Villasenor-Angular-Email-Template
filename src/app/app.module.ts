import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MidColComponent } from './mid-col/mid-col.component';
import { TestComponent } from './right-test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    MidColComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
