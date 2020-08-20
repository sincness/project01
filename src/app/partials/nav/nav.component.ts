import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuOpen: boolean;
  // online: boolean;
  // online = this.auth.online;
  online = this.auth.currentUserValue ? true : false
  constructor(private auth: AuthService) { }

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

  logout() {
    this.auth.logout();
  }
}
