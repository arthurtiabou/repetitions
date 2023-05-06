import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbscenceEnseignantComponent } from './abscence-enseignant.component';

describe('AbscenceEnseignantComponent', () => {
  let component: AbscenceEnseignantComponent;
  let fixture: ComponentFixture<AbscenceEnseignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbscenceEnseignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbscenceEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
