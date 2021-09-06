import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product-table.service';
import { IJoinContAndProd } from './IJoinContAndProd';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})

export class ProductTableComponent implements OnInit {

  centered = false;
  disabled = false;
  unbounded = false;



  prodAndContList: IJoinContAndProd[] = [];
  ContNames: string[] = [];
  filtredContNames: string[] = [];
  constructor(private prod_serv: ProductService) { }

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList() {
    this.prod_serv.getContAndProd().subscribe(
      products => {
        this.prodAndContList = products
        this.prodAndContList.forEach(element => {
           this.ContNames.push(element.Name);
        });
        this.filtredContNames = this.ContNames.filter((item, index) => this.ContNames.indexOf(item) === index);
        this.filtredContNames.forEach(element => {
         });
    });
  }


}




