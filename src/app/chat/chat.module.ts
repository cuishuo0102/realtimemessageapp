import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './me/me.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatComponent } from './chat.component';


@NgModule({
  declarations: [
    MeComponent,
    ChatsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
