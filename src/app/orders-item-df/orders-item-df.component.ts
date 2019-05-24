import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'orders-item-df',
  templateUrl: './orders-item-df.component.html',
  styleUrls: ['./orders-item-df.component.css']
})
export class OrdersItemDFComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;
  @Input() title: string;
  @Input() id: number;
  @Input() price: number;
  
  constructor() { }

  ngOnInit() {
  }

}
