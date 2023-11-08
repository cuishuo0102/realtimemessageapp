import { Component, ElementRef, ViewChild } from '@angular/core';
import { MeService } from '../me.service';
import { ChatsService } from '../chats.service';

@Component({
  selector: 'chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent {
  constructor(
    private meService: MeService,
    private chatsService: ChatsService
  ) {}

  @ViewChild('msg') msgTextarea!: ElementRef;

  getMyName(): string {
    return this.meService.getUsername()
  }

  getFriends(): Array<string> {
    return this.meService.getFriends()
  }

  getChatNames() {
    return this.chatsService.getChatNameList()
  }

  getChat(name: string) {
    return this.chatsService.getChat(name)
  }

  startChat(name: string) {
    this.chatsService.startChat(name)
  }

  sendMessage(whom: string, content: string) {
    this.chatsService.sendMessage(whom, content)
    this.msgTextarea.nativeElement.value = ''
  }

}
