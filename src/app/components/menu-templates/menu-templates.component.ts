import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';
import { CodeEditorService } from '../../services/code-editor.service';
import { TemplatesService } from '../../services/templates.service';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-menu-templates',
  templateUrl: './menu-templates.component.html',
  styleUrls: ['./menu-templates.component.scss'],
})
export class MenuTemplatesComponent implements OnInit {
  items: { id: string }[] = [];

  constructor(
    private templateService: TemplatesService,
    private dialogService: NbDialogService,
    private codeEditorService: CodeEditorService
  ) {}

  ngOnInit(): void {
    this.templateService.list();
    this.templateService.templates.subscribe((items) => {
      this.items = items;
      if (!this.codeEditorService.currentFile.value) {
        const indexFile = items.find((f) => f?.id?.includes('index.html'));
        if (indexFile) {
          this.codeEditorService.setCurrentFile(indexFile);
        }
      }
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
