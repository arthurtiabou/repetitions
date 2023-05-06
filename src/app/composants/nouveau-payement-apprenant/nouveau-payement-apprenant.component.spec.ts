import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPayementApprenantComponent } from './nouveau-payement-apprenant.component';

describe('NouveauPayementApprenantComponent', () => {
  let component: NouveauPayementApprenantComponent;
  let fixture: ComponentFixture<NouveauPayementApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPayementApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPayementApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
