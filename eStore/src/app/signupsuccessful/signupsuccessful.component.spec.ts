import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsuccessfulComponent } from './signupsuccessful.component';

describe('SignupsuccessfulComponent', () => {
  let component: SignupsuccessfulComponent;
  let fixture: ComponentFixture<SignupsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
