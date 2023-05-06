import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEngseignantComponent } from './detail-engseignant.component';

describe('DetailEngseignantComponent', () => {
  let component: DetailEngseignantComponent;
  let fixture: ComponentFixture<DetailEngseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEngseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEngseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
