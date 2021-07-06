import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';
import { CodeEditorService } from '../../services/code-editor.service';
import { WebsiteEditorService } from '../../services/website-editor.service';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-menu-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.scss'],
})
export class MenuPagesComponent implements OnInit {
  items = [];

  constructor(
    private websiteEditorService: WebsiteEditorService,
    private dialogService: NbDialogService,
    private codeEditorService: CodeEditorService
  ) {}

  ngOnInit(): void {
    this.websiteEditorService.pages.subscribe((items) => {
      this.items = items;
      // if (!this.codeEditorService.currentFile.value) {
      //   const indexFile = items.find((f) => f?.id?.includes('index.html'));
      //   if (indexFile) {
      //     this.codeEditorService.setCurrentFile(indexFile);
      //   }
      // }
    });
  }

  onItem(f): void {
    this.codeEditorService.setCurrentFile(f);
  }

  onAction(e): void {
    switch (e) {
      case 'delete':
        this.dialogService.open(DeleteDialogComponent, {
          context: {
            name: 'template',
            callback: () => {
              console.log('delete now');
            },
          },
        });

        break;

      default:
        break;
    }
  }
}
