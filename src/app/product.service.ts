import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

    produits = [
        {
          title: 'T shirt ',
          price: 100,
          category:'Men clothes',
          description:'Black t shirt',
          imgurl:'assets/img/tshirt.jpeg'

        },
        {
            title: 'Dress ',
            price: 2000,
            category:'Women clothes',
            description:'Pink dress',
            imgurl:'assets/img/robe.jpeg'
        },
        {
            title: 'Watch ',
            price: 500,
            category:'Accessory',
            description:'Black watch',
            imgurl:'assets/img/watch.jpeg'
        },
        {
            title: 'Iphone 8 ',
            price: 5000,
            category:'Electronics',
            description:'Iphone 8 128gb',
            imgurl:'assets/img/iphone.jpg'
        },
        {
            title: 'shirt ',
            price: 300,
            category:'Men clothes',
            description:'Chinesse style shirt ',
            imgurl:'assets/img/chemise.jpg'
  
          }

      ];

    filterbysearch(searchtext : string){
        return this.produits.filter(x => 
            (x.title.toLowerCase().includes(searchtext))
          );
    }
    
    sortbypricehigh(produits : any[]){
        produits.sort(function(a,b) {
            return b.price - a.price;
        });
        return produits;
        


    }
    sortbypricelow(produits : any[]){
        
        produits.sort(function(a,b) {
            return a.price - b.price;
        });
        return produits;

    }
    
      
    
}