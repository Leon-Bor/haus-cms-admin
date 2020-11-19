import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { CodeEditorService } from '../../services/code-editor.service';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-menu-files',
  templateUrl: './menu-files.component.html',
  styleUrls: ['./menu-files.component.scss'],
})
export class MenuFilesComponent implements OnInit {
  items: { id: string; path: string }[] = [];

  constructor(private filesService: FilesService, private codeEditorService: CodeEditorService) {}

  ngOnInit(): void {
    this.filesService.getFiles();
    this.filesService.files.subscribe((items) => {
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
