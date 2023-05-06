import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCourComponent } from './nouveau-cour.component';

describe('NouveauCourComponent', () => {
  let component: NouveauCourComponent;
  let fixture: ComponentFixture<NouveauCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
