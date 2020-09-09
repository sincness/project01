import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }
  /**
   * 🍪Funktion som henter en cookie 🍪
   * @param {String} name  Angiv et navn
   */
  get(name: string): string {
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }
  /**
   * 🍪Funktion som laver en cookie 🍪
   * @param {String} name  Angiv et navn
   * @param {String | Number} value  Angiv en værdi
   * @param {Number} days  [Valgfri udløbsfrist]
   */
  set(name: string, value: string | number, days?: number) {
    const d = new Date();
    days ? d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)) : d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=/`;
  }
  /**
   * 🍪Funktion som sletter en cookie 🍪
   * @param {String} name  Angiv et navn
   */
  delete(name: string) {
    const d = new Date();
    d.setTime(d.getTime() + (-7 * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${name}=;expires=${expires};path=/`;
  }
}
