import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFilesComponent } from './menu-assets.component';

describe('MenuAssetsComponent', () => {
  let component: MenuFilesComponent;
  let fixture: ComponentFixture<MenuFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuFilesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
