import { Component, ElementRef, ViewChild } from '@angular/core';
import { MeService } from '../me.service';

@Component({
  selector: 'me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {
  constructor(
    private meService: MeService
  ) {}

  @ViewChild('usernameInput') usernameInput!: ElementRef;

  isRegisted() {
    return this.meService.getIsRegistered()
  }

  getMyUsername() {
    return this.meService.getUsername()
  }

  register() {
    this.meService.setUsername(this.usernameInput.nativeElement.value)
    this.meService.register()
  }

  unregister() {
    this.meService.unregister()
  }
}
