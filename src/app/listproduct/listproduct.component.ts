import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  filter = { electronics: true, menclothes: true, womenclothes: true, accessory: true  };
  produits : any[]=[];
  searchtext :any = { title: '' };

  
  constructor(private productservice : ProductService) { }

  ngOnInit() {

    this.produits=this.productservice.produits;


  }
  filterChange() {
    this.produits = this.productservice.produits.filter(x => 
       (x.category === 'Accessory' && this.filter.accessory)
       || (x.category === 'Men clothes' && this.filter.menclothes)
       || (x.category === 'Women clothes' && this.filter.womenclothes)
       || (x.category === 'Electronics' && this.filter.electronics)
    );
  }
  sorthigh(){
    this.productservice.sortbypricehigh(this.produits);
  }

  sortlow(){
    this.productservice.sortbypricelow(this.produits);

  }

}
