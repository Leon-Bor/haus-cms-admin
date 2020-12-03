import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { TemplatesService } from '../../../services/templates.service';
import { FilesService } from '../../../services/files.service';
import { ComponentsService } from '../../../services/components.service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.scss'],
})
export class AddFileComponent implements OnInit {
  @Input() type = null;

  addForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    type: new FormControl(this.type),
  });

  constructor(
    public ref: NbDialogRef<any>,
    private http: HttpClient,
    private toastrService: NbToastrService,
    private templatesService: TemplatesService,
    private componentsService: ComponentsService,
    private filesService: FilesService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addForm.valid) {
      console.log('onSubmit');
      console.log(this.addForm.value);
      this.http
        .post(`${environment.backendUrl}/cms/${this.type}s`, {
          ...this.addForm.value,
          file: '',
        })
        .subscribe(
          (newFile) => {
            // success
            this.toastrService?.show(`New ${this.type} has been created`, `Created ${this.type}`, { status: 'success' });
            this.close();

            switch (this.type) {
              case 'template':
                this.templatesService.list();
                break;
              case 'component':
                this.componentsService.list();
                break;
              case 'file':
                this.filesService.list();
                break;
            }
          },
          () => {
            // error
          }
        );
    }
  }

  get id(): any {
    return this.addForm.get('id');
  }

  close(): void {
    this.ref.close();
  }
}
