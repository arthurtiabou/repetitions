import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEngComponent } from './detail-eng.component';

describe('DetailEngComponent', () => {
  let component: DetailEngComponent;
  let fixture: ComponentFixture<DetailEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
