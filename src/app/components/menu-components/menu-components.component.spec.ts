import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponentsComponent } from './menu-components.component';

describe('MenuComponentsComponent', () => {
  let component: MenuComponentsComponent;
  let fixture: ComponentFixture<MenuComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
