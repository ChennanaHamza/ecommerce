import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-pricelow',
  templateUrl: './pricelow.component.html',
  styleUrls: ['./pricelow.component.scss']
})
export class PricelowComponent implements OnInit {

  @Output() sortpricelow = new EventEmitter();
  constructor(private productservice :ProductService) { }

  ngOnInit() {
  }
  sortlow(){
    this.sortpricelow.emit(this.productservice.sortbypricelow(this.productservice.list));
  }
}
