import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEdtComponent } from './detail-edt.component';

describe('DetailEdtComponent', () => {
  let component: DetailEdtComponent;
  let fixture: ComponentFixture<DetailEdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
