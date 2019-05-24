import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDFComponent } from './orders-df.component';

describe('OrdersDFComponent', () => {
  let component: OrdersDFComponent;
  let fixture: ComponentFixture<OrdersDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
