import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemDFComponent } from './orders-item-df.component';

describe('OrdersItemDFComponent', () => {
  let component: OrdersItemDFComponent;
  let fixture: ComponentFixture<OrdersItemDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
