import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenkiShosaiComponent } from './tenki-shosai.component';

describe('TenkiShosaiComponent', () => {
  let component: TenkiShosaiComponent;
  let fixture: ComponentFixture<TenkiShosaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenkiShosaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenkiShosaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
