import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRepetitionComponent } from './menu-repetition.component';

describe('MenuRepetitionComponent', () => {
  let component: MenuRepetitionComponent;
  let fixture: ComponentFixture<MenuRepetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRepetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRepetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
