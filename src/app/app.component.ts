import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Produit } from './models/produit.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  products : Array<any>;

  constructor(private productservice : ProductService) { }

  ngOnInit() {
    this.productservice.getproducts().subscribe(
      result =>{
        this.products=result;
      }
    )
  }
}
