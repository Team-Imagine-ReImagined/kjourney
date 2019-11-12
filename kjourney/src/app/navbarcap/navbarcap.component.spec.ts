import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcapComponent } from './navbarcap.component';

describe('NavbarcapComponent', () => {
  let component: NavbarcapComponent;
  let fixture: ComponentFixture<NavbarcapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarcapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarcapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
