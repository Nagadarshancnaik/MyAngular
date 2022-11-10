import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearSearchComponent } from './clear-search.component';

describe('ClearSearchComponent', () => {
  let component: ClearSearchComponent;
  let fixture: ComponentFixture<ClearSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
