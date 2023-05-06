import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPayementAbscenceComponent } from './detail-payement-abscence.component';

describe('DetailPayementAbscenceComponent', () => {
  let component: DetailPayementAbscenceComponent;
  let fixture: ComponentFixture<DetailPayementAbscenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPayementAbscenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPayementAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
