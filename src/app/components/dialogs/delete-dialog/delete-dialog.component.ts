import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {

  constructor(public ref: NbDialogRef<any>) {}
  @Input() name = '';
  @Input() callback = () => {};

  ngOnInit(): void {}

  onDelete(): void {
    this.callback();
    this.ref.close();
  }

  close(): void {
    this.ref.close();
  }
}
