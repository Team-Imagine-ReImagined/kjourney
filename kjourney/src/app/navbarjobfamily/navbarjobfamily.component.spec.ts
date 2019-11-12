import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarjobfamilyComponent } from './navbarjobfamily.component';

describe('NavbarjobfamilyComponent', () => {
  let component: NavbarjobfamilyComponent;
  let fixture: ComponentFixture<NavbarjobfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarjobfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarjobfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
