import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHomeScreenComponent } from './button-home-screen.component';

describe('ButtonHomeScreenComponent', () => {
  let component: ButtonHomeScreenComponent;
  let fixture: ComponentFixture<ButtonHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
