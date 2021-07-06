import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { CodeEditorService } from '../../services/code-editor.service';
import { WebsiteEditorService } from '../../services/website-editor.service';

@Component({
  selector: 'app-menu-components',
  templateUrl: './menu-components.component.html',
  styleUrls: ['./menu-components.component.scss'],
})
export class MenuComponentsComponent implements OnInit {
  items = [];

  constructor(
    private websiteEditorService: WebsiteEditorService,
    private codeEditorService: CodeEditorService
  ) {}

  ngOnInit(): void {
    this.websiteEditorService.components.subscribe((items) => {
      this.items = items;
    });
  }

  onItem(f): void {
    this.codeEditorService.setCurrentFile(f);
  }
}
