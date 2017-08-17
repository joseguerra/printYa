import {Component} from '@angular/core';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  objects = [
    {
      name: 'Users',
      avatar: 'svg-11',
      routerLink: 'user'
    },
    {
      name: 'Lotery',
      avatar: 'svg-12',
      routerLink: 'lotery'
    },
    {
      name: 'Ticket',
      avatar: 'svg-13',
      routerLink: 'ticket'
    },    
  ];

  selectedUser = this.objects[0];
  isDarkTheme = false;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

}
