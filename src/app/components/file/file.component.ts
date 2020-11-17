import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Output() action = new EventEmitter();
  @Input() label = null;
  @Input() description = null;
  @Input() icon = null;
  @Input() actions = [
    {
      name: 'delete',
      icon: 'trash-2-outline',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAction(e, name): void {
    e.stopPropagation();
    this.action.emit(name);
  }
}
