import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRepetitionComponent } from './header-repetition.component';

describe('HeaderRepetitionComponent', () => {
  let component: HeaderRepetitionComponent;
  let fixture: ComponentFixture<HeaderRepetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRepetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRepetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
