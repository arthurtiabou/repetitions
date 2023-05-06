import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPayementAppComponent } from './detail-payement-app.component';

describe('DetailPayementAppComponent', () => {
  let component: DetailPayementAppComponent;
  let fixture: ComponentFixture<DetailPayementAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPayementAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPayementAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
