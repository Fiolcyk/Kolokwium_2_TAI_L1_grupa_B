import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsDFComponent } from './orders-details-df.component';

describe('OrdersDetailsDFComponent', () => {
  let component: OrdersDetailsDFComponent;
  let fixture: ComponentFixture<OrdersDetailsDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
