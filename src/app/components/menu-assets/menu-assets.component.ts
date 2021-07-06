import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { CodeEditorService } from '../../services/code-editor.service';
import { WebsiteEditorService } from '../../services/website-editor.service';

@Component({
  selector: 'app-menu-assets',
  templateUrl: './menu-assets.component.html',
  styleUrls: ['./menu-assets.component.scss'],
})
export class MenuFilesComponent implements OnInit {
  items = [];

  constructor(
    private websiteEditorService: WebsiteEditorService,
    private codeEditorService: CodeEditorService
  ) {}

  ngOnInit(): void {
    this.websiteEditorService.assets.subscribe((items) => {
      this.items = items;
    });
  }

  onItem(f): void {
    this.codeEditorService.setCurrentFile(f);
  }

  getIcon(f): string {
    return f.id.split('.')[1];
  }
}
