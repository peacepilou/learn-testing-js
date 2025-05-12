import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPriceComponent } from './display-price.component';

describe('DisplayPriceComponent', () => {
  let component: DisplayPriceComponent;
  let fixture: ComponentFixture<DisplayPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPriceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DisplayPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // write your tests here
});
