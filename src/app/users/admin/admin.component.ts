import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  cont_name: string = '';
  email: string = '';
  num_product: number = 0;

  constructor(private Admin_Serv: AdminService) { }

  OwnerList: any = [];

  ngOnInit(): void {
    this.refreshOwnerList();
  }

  refreshOwnerList() {
    this.Admin_Serv.getOwners().subscribe(data => {
      this.OwnerList = data;
    });
  }


  onSubmit(form: NgForm): void {
    console.log(form.value);

  }


}
