import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseResetpasswordComponent } from './response-resetpassword.component';

describe('ResponseResetpasswordComponent', () => {
  let component: ResponseResetpasswordComponent;
  let fixture: ComponentFixture<ResponseResetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseResetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseResetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
