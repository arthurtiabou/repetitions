import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAbscenceEngComponent } from './information-abscence-eng.component';

describe('InformationAbscenceEngComponent', () => {
  let component: InformationAbscenceEngComponent;
  let fixture: ComponentFixture<InformationAbscenceEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationAbscenceEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationAbscenceEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
