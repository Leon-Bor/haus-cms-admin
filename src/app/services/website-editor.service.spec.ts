import { TestBed } from '@angular/core/testing';

import { WebsiteEditorService } from './website-editor.service';

describe('WebsiteEditorService', () => {
  let service: WebsiteEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsiteEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
