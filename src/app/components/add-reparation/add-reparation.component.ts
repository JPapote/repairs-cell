import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-reparation',
  templateUrl: './add-reparation.component.html',
  styleUrls: ['./add-reparation.component.css']
})
export class AddReparationComponent implements OnInit {

  reparation:string=""
  id:any
  loading:boolean=false
  constructor(private _serviceClient:ClientService, private route:Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
  }

  addReparation(){
    this._serviceClient.addReparation(this.reparation, this.id).subscribe({
      next:(val) =>{
        this.route.navigate(['/dashboard'])
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
