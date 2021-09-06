import { Component,   OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IJoinContAndProd } from 'src/app/product-table/IJoinContAndProd';
import { ContributerService } from 'src/services/contributer.service';
import { ProductService } from 'src/services/product-table.service';

@Component({
  selector: 'app-contributer',
  templateUrl: './contributer.component.html',
  styleUrls: ['./contributer.component.scss']
})

export class ContributerComponent implements OnInit {

  prod_name: string = '';
  prod_status: string = '';
  link_api: string = '';
  link_doc: string = '';
  cont_name: string = '';

  contributerList : any=[] ;

  constructor(private cont_Serv:ContributerService, private prod_serv :ProductService ) { }

  ngOnInit() {
      this.refreshContributersList();
  }

  refreshContributersList()
  {
    this.cont_Serv.getContributers().subscribe(data=>{
      this.contributerList = data;
    });
  }

  onSubmit(form: NgForm): void {
    var contProdJoin:IJoinContAndProd = {
      ProdName : form.value.prod_name,
      LinkApi : form.value.link_api,
      LinkDoc : form.value.link_doc,
      Status : form.value.prod_status,
      Name : form.value.cont_name
    }
    console.log(contProdJoin);
    this.prod_serv.addContAndProd(contProdJoin).subscribe();
  }


}
