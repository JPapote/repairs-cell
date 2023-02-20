import { Component, OnInit } from '@angular/core';
import { FixedPhone } from 'src/app/interfaces/fixedPhone';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-reparation',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css']
})
export class ReparationComponent implements OnInit {

  listReparation:FixedPhone[] = []
  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {
    this.getAllRepair()
  }

  getAllRepair(){
    this._clientService.getReparation().subscribe(data => {
      this.listReparation = data;
    })
  }
}
