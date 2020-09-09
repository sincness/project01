import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('toolbar') toolbar;
  @ViewChild('sideToolbar') sideToolbar;
  @ViewChild('icon') icon;

  menuOpen: boolean;
  online: boolean = this.auth.currentUserValue ? true : false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}

  menu() {
    (this.menuOpen) ? this.open() : this.close();
  }

  open() {
    this.toolbar.nativeElement.style.marginLeft = '250px';
    this.sideToolbar.nativeElement.style.width = '250px';
    this.icon.nativeElement.textContent = 'menu_open';
  }

  close() {
    this.toolbar.nativeElement.style.marginLeft = '0';
    this.sideToolbar.nativeElement.style.width = '0';
    this.icon.nativeElement.textContent = 'menu';
  }

  logout() {
    this.auth.logout();
  }
}
