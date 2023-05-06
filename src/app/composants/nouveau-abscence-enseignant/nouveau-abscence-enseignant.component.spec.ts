import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauAbscenceEnseignantComponent } from './nouveau-abscence-enseignant.component';

describe('NouveauAbscenceEnseignantComponent', () => {
  let component: NouveauAbscenceEnseignantComponent;
  let fixture: ComponentFixture<NouveauAbscenceEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauAbscenceEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauAbscenceEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
