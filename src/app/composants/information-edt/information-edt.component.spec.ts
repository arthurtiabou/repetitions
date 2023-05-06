import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEdtComponent } from './information-edt.component';

describe('InformationEdtComponent', () => {
  let component: InformationEdtComponent;
  let fixture: ComponentFixture<InformationEdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationEdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
