import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingCoursesComponent } from './on-going-courses.component';

describe('OnGoingCoursesComponent', () => {
  let component: OnGoingCoursesComponent;
  let fixture: ComponentFixture<OnGoingCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnGoingCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnGoingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
