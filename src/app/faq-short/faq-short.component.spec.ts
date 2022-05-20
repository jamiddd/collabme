import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqShortComponent } from './faq-short.component';

describe('FaqShortComponent', () => {
  let component: FaqShortComponent;
  let fixture: ComponentFixture<FaqShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
