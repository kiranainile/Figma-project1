import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  showServices = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleServices() {
    this.showServices = !this.showServices;
  }
}
