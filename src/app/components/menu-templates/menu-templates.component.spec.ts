import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTemplatesComponent } from './menu-templates.component';

describe('MenuTemplatesComponent', () => {
  let component: MenuTemplatesComponent;
  let fixture: ComponentFixture<MenuTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
