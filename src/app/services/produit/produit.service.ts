import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  

  produits: Array<any>;

  constructor() {
    this.produits = [];

    const produitsName = ['Tomates', 'Radis', 'Melon', 'Courgette', 'Banane', 'Pomme', 'Poire', 'Champignon', 'Poireau'];

    for (let i = 1; i < produitsName.length; i++){
      
      this.produits.push({
        id: i,
        name: produitsName[i],
        status: 'en stock' 
        
      })

    }
  }

  switchAllProduitEtat(newEtat: string) {
    this.produits.forEach(produit => {
      produit.status = newEtat;
    });
  }

  switchProduitEtat(produitId: number) {
    for (let i = 1; i < this.produits.length; i++) {
      if (this.produits[i].id === produitId) {
        this.produits[i].status = this.produits[i].status === 'en stock' ? 'pas en stock': 'en stock';
        break;
      }
     
    }
    
  }
}
