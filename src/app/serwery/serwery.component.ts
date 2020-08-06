import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serwery',
  templateUrl: './serwery.component.html',
  styleUrls: ['./serwery.component.css']
})
export class SerweryComponent implements OnInit {
  allowNewSerwer = false;
  serwerCreationStatus = 'No serwer was created';
  serwerName: string = 'Test';
  userName = '';
  userNameCreationStatus = 'Brak imienia';
  serwerCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewSerwer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
  onCreateSerwer() {
    this.serwerCreationStatus = 'Serwer was create' + this.serwerName;
    this.serwerCreated = true;
  }

  onUpdateSerwerName(event: Event) {
    this.serwerName = (<HTMLInputElement>event.target).value;
  }
  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  onCreateUserName() {

    this.userNameCreationStatus = 'Imię użytkownika: ' + this.userName;


  }

}
