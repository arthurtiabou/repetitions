import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauApprenantComponent } from './nouveau-apprenant.component';

describe('NouveauApprenantComponent', () => {
  let component: NouveauApprenantComponent;
  let fixture: ComponentFixture<NouveauApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
