import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobfamilyComponent } from './jobfamily.component';

describe('JobfamilyComponent', () => {
  let component: JobfamilyComponent;
  let fixture: ComponentFixture<JobfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
