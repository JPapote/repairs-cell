import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listClient: Client[] = []
  constructor(private _productService: ClientService, private router:Router) { }

  ngOnInit(): void {
    this.getAllClients();
  }
  getAllClients() {
    this._productService.getClients().subscribe(data => {
      this.listClient = data;
    })
  }

  repairs(){
    this.router.navigate(['/reparation'])
  }

  addClient(){
    this.router.navigate(['/addClient'])
  }

  phoneList(id?: number){
    this.router.navigate(['/addPhone/'+id])
  }
}
