import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StompService } from './stomp/stomp.service';
import { stompServiceFactory } from './stomp/stompServiceFactory'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: StompService,
      useFactory: stompServiceFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
