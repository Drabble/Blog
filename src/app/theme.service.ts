import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _themeDark: BehaviorSubject<boolean>;
  public isThemeDark: Observable<boolean>;

  constructor(@Inject(DOCUMENT) private document: Document, private cookieService: SsrCookieService) {
    this._themeDark = new BehaviorSubject(this.cookieService.get("dark") == 'true');
    this.isThemeDark = this._themeDark.asObservable();
    this.setDarkTheme(this._themeDark.value);
  }

  toggleDarkMode() {
    this.setDarkTheme(!this._themeDark.value);
  }

  setDarkTheme(isDarkMode: boolean) {
    this._themeDark.next(isDarkMode);
    if (isDarkMode) {
      this.document.body.classList.add('dark');
      this.cookieService.set('dark', 'true', { path: "/", expires: 365, sameSite: 'Lax' });
    } else {
      this.document.body.classList.remove('dark');
      this.cookieService.set('dark', 'false', { path: "/", expires: 365, sameSite: 'Lax' });
    }
  }
}