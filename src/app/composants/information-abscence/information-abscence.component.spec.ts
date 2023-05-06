import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAbscenceComponent } from './information-abscence.component';

describe('InformationAbscenceComponent', () => {
  let component: InformationAbscenceComponent;
  let fixture: ComponentFixture<InformationAbscenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAbscenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAbscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
