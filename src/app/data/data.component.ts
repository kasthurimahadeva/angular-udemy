import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  displayData: boolean = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  display(): void {
    this.displayData = !this.displayData;
    this.logs.push(this.logs.length + 1);
  }
}
