import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  produits: Array<any>;

  constructor(private produitsService: ProduitService) {
    this.produits = []
   
  }


  ngOnInit(): void {

    this.produits = this.produitsService.produits;
    
  }


}
