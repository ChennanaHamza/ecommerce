import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() produits : any[];
  @Output() filterbycategorie = new EventEmitter();
  filter = { electronics: true, menclothes: true, womenclothes: true, accessory: true  };
  constructor(private productservice : ProductService) { }

  ngOnInit() {
  }

  filterChange() {

      this.filterbycategorie.emit(
        this.productservice.produits.filter(x => 
          (x.category === 'Accessory' && this.filter.accessory)
          || (x.category === 'Men clothes' && this.filter.menclothes)
          || (x.category === 'Women clothes' && this.filter.womenclothes)
          || (x.category === 'Electronics' && this.filter.electronics)
       )
        
        );
    
  
  }

}
