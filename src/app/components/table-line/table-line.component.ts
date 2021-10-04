import { Component,Input, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit/produit.service';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  @Input() status: string;

  //nextStatus: string;

  constructor(private produitsService: ProduitService) {
    this.id = 0;
    this.name = '';
    this.status = '';

    //this.nextStatus = '';
  }
  
  onClickSwitchProduitEtat() {
    this.produitsService.switchProduitEtat(+this.id);
  }

  ngOnInit(): void {
  }

}
