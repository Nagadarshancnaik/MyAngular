import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearRecentComponent } from './clear-recent.component';

describe('ClearRecentComponent', () => {
  let component: ClearRecentComponent;
  let fixture: ComponentFixture<ClearRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
