import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem } from '@nebular/theme';
import { TemplatesService } from '../../services/templates.service';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-menu-templates',
  templateUrl: './menu-templates.component.html',
  styleUrls: ['./menu-templates.component.scss'],
})
export class MenuTemplatesComponent implements OnInit {
  items: { id: string }[] = [];

  constructor(private templateService: TemplatesService, private dialogService: NbDialogService) {}

  ngOnInit(): void {
    this.templateService.getTemplates();
    this.templateService.templates.subscribe((items) => {
      this.items = items;
    });
  }

  onItem(): void {
    console.log('onTemplate click');
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
