import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenListComponent } from './ken-list.component';

describe('KenListComponent', () => {
  let component: KenListComponent;
  let fixture: ComponentFixture<KenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
