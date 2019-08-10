import { Component, OnInit, Input, Output, OnChanges,EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() produits : any[];
  @Output() filterproducts = new EventEmitter();
  searchtext : string;
  constructor(private productservice : ProductService) { }

  ngOnInit() {

  }
  filterproductss(){
    this.filterproducts.emit(this.productservice.filterbysearch(this.searchtext));
  }
  

}
