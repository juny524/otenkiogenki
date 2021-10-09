import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenkiTextComponent } from './tenki-text.component';

describe('TenkiTextComponent', () => {
  let component: TenkiTextComponent;
  let fixture: ComponentFixture<TenkiTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenkiTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenkiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
