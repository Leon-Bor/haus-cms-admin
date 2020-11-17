import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-menu-files',
  templateUrl: './menu-files.component.html',
  styleUrls: ['./menu-files.component.scss'],
})
export class MenuFilesComponent implements OnInit {
  items: { id: string; path: string }[] = [];

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    this.filesService.getFiles();
    this.filesService.files.subscribe((items) => {
      console.log(items);
      this.items = items;
    });
  }

  getIcon(f): string {
    return f.id.split('.')[1];
  }
}
