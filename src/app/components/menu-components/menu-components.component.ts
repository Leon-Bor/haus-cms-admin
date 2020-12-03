import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { CodeEditorService } from '../../services/code-editor.service';
import { ComponentsService } from '../../services/components.service';

@Component({
  selector: 'app-menu-components',
  templateUrl: './menu-components.component.html',
  styleUrls: ['./menu-components.component.scss'],
})
export class MenuComponentsComponent implements OnInit {
  items: { id: string }[] = [];

  constructor(private componentsService: ComponentsService, private codeEditorService: CodeEditorService) {}

  ngOnInit(): void {
    this.componentsService.list();
    this.componentsService.components.subscribe((items) => {
      this.items = items;
    });
  }

  onItem(f): void {
    this.codeEditorService.setCurrentFile(f);
  }
}
