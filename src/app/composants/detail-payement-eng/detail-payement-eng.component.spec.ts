import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPayementEngComponent } from './detail-payement-eng.component';

describe('DetailPayementEngComponent', () => {
  let component: DetailPayementEngComponent;
  let fixture: ComponentFixture<DetailPayementEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPayementEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPayementEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
