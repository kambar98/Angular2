import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serwery',
  templateUrl: './serwery.component.html',
  styleUrls: ['./serwery.component.css']
})
export class SerweryComponent implements OnInit {
  allowNewSerwer = false;
  serwerCreationStatus = 'No serwer was created';


  constructor() {
    setTimeout(() => {
      this.allowNewSerwer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }
  onCreateSerwer() {
    this.serwerCreationStatus = 'Serwer was create';
  }
}
