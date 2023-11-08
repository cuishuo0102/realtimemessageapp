import { Injectable } from '@angular/core';
import { Message } from './message';
import { StompService } from '../stomp/stomp.service';
import { MeService } from './me.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  /**
   * 聊天
   * Record<用户名, 消息列表>
   */
  private chats: Record<string, Message[]> = {};

  constructor(
    private meService: MeService,
    private stomp: StompService
  ) { }

  public listenMessage() {
    this.stomp.watch(`/user/${this.meService.getUsername()}/message`)
      .subscribe((data) => {
        const message = JSON.parse(data.body)
        if (!this.chats[message.from]) {
          this.chats[message.from] = [];
        }
        this.chats[message.from].push(message)
      })
  }

  public startChat(whom: string) {
    this.chats[whom] = [];
    this.listenMessage();
  }

  public getChatNameList(): Array<string> {
    return Object.keys(this.chats);
  }

  public getChat(whom: string): Array<Message> {
    return this.chats[whom];
  }

  public sendMessage(whom: string, content: string): void {
    const message = {
      from: this.meService.getUsername(),
      to: whom,
      content,
    }
    this.chats[whom].push(message)
    this.stomp.publish({
      destination: '/client/send-message',
      body: JSON.stringify(message)
    })
  }

}
