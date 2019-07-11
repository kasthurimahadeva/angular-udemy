import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>You are in danger. Warning!!!.</p>
  `,
  styles: [`
    p {
      padding: 10px;
      background-color: rgba(244, 12, 36, 0.14);
      border: 1px solid #bf0000;
      margin-top: 10px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
