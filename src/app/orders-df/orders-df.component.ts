import { Component, OnInit } from '@angular/core';
import { DFDataService } from '../_services/df-data.service';

@Component({
  selector: 'orders-df',
  templateUrl: './orders-df.component.html',
  styleUrls: ['./orders-df.component.css']
})
export class OrdersDFComponent implements OnInit {
  public items$: any;

  constructor(private service: DFDataService) { }

  ngOnInit() {
    this.getAll();
  }
  
  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });

  }
}
