import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreateStatus: string = 'No server was created!';
  serverName: string = '';
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer(): void {
    this.serverCreateStatus = 'Server was created successfully!';
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
