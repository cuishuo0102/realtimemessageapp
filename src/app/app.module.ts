import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StompService } from './stomp/stomp.service';
import { stompServiceFactory } from './stomp/stompServiceFactory'
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule
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
