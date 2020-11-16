import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TemplatesService } from '../../services/templates.service';

@Component({
  selector: 'app-menu-templates',
  templateUrl: './menu-templates.component.html',
  styleUrls: ['./menu-templates.component.scss'],
})
export class MenuTemplatesComponent implements OnInit {
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

  constructor(private templateService: TemplatesService) {}

  ngOnInit(): void {
    console.log('ng inint template');
    this.templateService.getTemplates();
  }
}
