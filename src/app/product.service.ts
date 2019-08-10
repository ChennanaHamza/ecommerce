import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produit } from './models/produit.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

    private productCollection: AngularFirestoreCollection<Produit>;
    private products: Observable<Produit[]>;
    public list : Array<any>;

   constructor(private db: AngularFirestore) {
        this.productCollection = db.collection<Produit>('Produits');
        const id = db.createId();
        this.products = this.productCollection.snapshotChanges().pipe(map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          })
        );
        this.getproducts().subscribe(
          result =>{
            this.list=result;
          }
        )
      }
      getproducts() {
        return this.products;
      }
    filterbysearch(searchtext : string,list){
        return list.filter(x => 
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