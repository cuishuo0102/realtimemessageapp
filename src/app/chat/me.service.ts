import { Injectable } from '@angular/core';
import { StompService } from '../stomp/stomp.service';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  private userName: string = '';
  private isRegistered: boolean = false;
  private friends: Array<string> = [];

  constructor(private stomp: StompService) {
    this.stomp.watch('/user/queue/register')
      .subscribe((data) => {
        const members = JSON.parse(data.body)
        if (members.length === 0) {
          this.isRegistered = false;
        } else {
          this.friends = members.filter((m: string) => m !== this.userName)
          this.isRegistered = true
        }
      })

    this.stomp.watch('/topic/new-member')
      .subscribe((data) => {
        const username = data.body
        if (username !== this.userName) {
          this.friends.push(username)
        }
      })
  }

  public getUsername(): string {
    return this.userName;
  }

  public setUsername(userName: string) {
    if (userName == this.userName) {
      return
    } else {
      this.userName = userName;
      this.isRegistered = false;
    }
  }

  public getIsRegistered(): boolean {
    return this.isRegistered;
  }

  public register(): void {
    this.stomp.publish({ destination: '/client/register', body: this.userName });
  }

  public unregister(): void {
    this.stomp.publish({ destination: '/client/unregister', body: this.userName });
  }

  public getFriends(): Array<string> {
    return this.friends;
  }
}
