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
  serverName: string = 'TestServer';
  isServerCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.allowNewServer = true, 2000);
  }

  onCreateServer(): void {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreateStatus = 'Server was created successfully!. The sever name is ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
