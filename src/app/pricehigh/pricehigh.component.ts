import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-pricehigh',
  templateUrl: './pricehigh.component.html',
  styleUrls: ['./pricehigh.component.scss']
})
export class PricehighComponent implements OnInit {

  @Output() sortpricehigh = new EventEmitter();
  constructor(private productservice :ProductService) { }

  ngOnInit() {
  }
  sorthigh(){
    this.sortpricehigh.emit(this.productservice.sortbypricehigh(this.productservice.list));
  }

}
