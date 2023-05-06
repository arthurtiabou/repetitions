import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementEngComponent } from './payement-eng.component';

describe('PayementEngComponent', () => {
  let component: PayementEngComponent;
  let fixture: ComponentFixture<PayementEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayementEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
