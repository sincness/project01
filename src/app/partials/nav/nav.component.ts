import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuOpen: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  menu() {
    (this.menuOpen) ? this.open() : this.close();
  }

  open() {
    this.get('#side-toolbar').style.width = '250px';
    this.get('#toolbar').style.marginLeft = '250px';
    this.get('#toolbar > span').textContent = 'menu_open';
  }

  close() {
    this.get('#side-toolbar').style.width = '0';
    this.get('#toolbar').style.marginLeft = '0';
    this.get('#toolbar > span').textContent = 'menu';
  }

  // Query Selector smart get Funktion
  get(selector) {
    return document.querySelector(selector);
  }

}
