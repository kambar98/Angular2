import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-serwer',
    templateUrl: './serwer.component.html',
      styles: [`
.online{
color:white;
}
` ]
  })
export class SerwerComponent {
  serwerID = 10;
  serwerStatus: string = 'offline';

  constructor() {
    this.serwerStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serwerStatus
  }

  getColor() {
    return this.serwerStatus === 'online' ? 'green' : 'red';
  }
}
