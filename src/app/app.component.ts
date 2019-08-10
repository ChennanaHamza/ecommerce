import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  produits : any[]=[];

  
  constructor(private productservice : ProductService) { }

  ngOnInit() {

    this.produits=this.productservice.produits;


  }
  sorthigh(){
    this.productservice.sortbypricehigh(this.produits);
  }

  sortlow(){
    this.productservice.sortbypricelow(this.produits);

  }
}
