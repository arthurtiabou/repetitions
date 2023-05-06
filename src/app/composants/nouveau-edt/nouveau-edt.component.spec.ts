import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEdtComponent } from './nouveau-edt.component';

describe('NouveauEdtComponent', () => {
  let component: NouveauEdtComponent;
  let fixture: ComponentFixture<NouveauEdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
