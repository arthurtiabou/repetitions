import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPayementEnseignantComponent } from './nouveau-payement-enseignant.component';

describe('NouveauPayementEnseignantComponent', () => {
  let component: NouveauPayementEnseignantComponent;
  let fixture: ComponentFixture<NouveauPayementEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPayementEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPayementEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
