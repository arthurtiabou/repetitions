import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAbscenceEngComponent } from './details-abscence-eng.component';

describe('DetailsAbscenceEngComponent', () => {
  let component: DetailsAbscenceEngComponent;
  let fixture: ComponentFixture<DetailsAbscenceEngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAbscenceEngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAbscenceEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
