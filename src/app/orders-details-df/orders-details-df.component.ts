import { Component, OnInit, Input } from '@angular/core';
import { DFDataService } from '../_services/df-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'orders-details-df',
  templateUrl: './orders-details-df.component.html',
  styleUrls: ['./orders-details-df.component.css']
})
export class OrdersDetailsDFComponent implements OnInit {
  public image = '';
  public text: string;
  public title : string;
  public id: number;
  public price: number;
  constructor(private dataService: DFDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.dataService.getOne(id).subscribe(res => {
        this.image = res['image'];
        this.text = res['text'];
        this.title = res['title'];
        this.price = res['price'];
      });
    } else {
      this.id = 1;
    }
  }

}
