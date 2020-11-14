import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu-components',
  templateUrl: './menu-components.component.html',
  styleUrls: ['./menu-components.component.scss'],
})
export class MenuComponentsComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Messages',
      badge: {
        text: '99+',
        status: 'danger',
      },
    },
    {
      title: 'Notifications',
      badge: {
        dotMode: true,
        status: 'warning',
      },
    },
    {
      title: 'Emails',
      badge: {
        text: 'new',
        status: 'success',
      },
    },
    {
      title: 'Messages',
      badge: {
        text: '99+',
        status: 'danger',
      },
    },
    {
      title: 'Notifications',
      badge: {
        dotMode: true,
        status: 'warning',
      },
    },
    {
      title: 'Emails',
      badge: {
        text: 'new',
        status: 'success',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
