import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationRepetitionComponent } from './pagination-repetition.component';

describe('PaginationRepetitionComponent', () => {
  let component: PaginationRepetitionComponent;
  let fixture: ComponentFixture<PaginationRepetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationRepetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationRepetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
