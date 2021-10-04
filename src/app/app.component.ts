import { Component } from '@angular/core';
import { ProduitService } from './services/produit/produit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //produits: Array<any>;

  constructor(private ProduitService: ProduitService) {
    //this.produits = this.ProduitService.produits;
    
  }

  onClickSwitchAllProduitEtat(newEtat: string) {
    this.ProduitService.switchAllProduitEtat(newEtat);
    
  }
  
}
