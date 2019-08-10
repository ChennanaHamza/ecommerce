import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './product.service';
import { CategoryComponent } from './category/category.component';
import { PricehighComponent } from './pricehigh/pricehigh.component';
import { PricelowComponent } from './pricelow/pricelow.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    PricehighComponent,
    PricelowComponent,
    SingleproductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
