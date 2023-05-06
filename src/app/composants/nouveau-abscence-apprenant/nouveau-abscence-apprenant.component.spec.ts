import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauAbscenceApprenantComponent } from './nouveau-abscence-apprenant.component';

describe('NouveauAbscenceApprenantComponent', () => {
  let component: NouveauAbscenceApprenantComponent;
  let fixture: ComponentFixture<NouveauAbscenceApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauAbscenceApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauAbscenceApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
