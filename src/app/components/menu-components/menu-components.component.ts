import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-menu-components',
  templateUrl: './menu-components.component.html',
  styleUrls: ['./menu-components.component.scss'],
})
export class MenuComponentsComponent implements OnInit {
  items: { id: string }[] = [];

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    this.componentsService.getComponents();
    this.componentsService.components.subscribe((items) => {
      this.items = items;
    });
  }
}
