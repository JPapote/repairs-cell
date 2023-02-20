import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ClientService } from 'src/app/services/client.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  username: string = '';
  loading: boolean = false;

  constructor(private _clientService: ClientService, private router: Router,
     private toastr: ToastrService,
     private _errorService: ErrorService) { }

  ngOnInit(): void {
  }

  addClient() {
    this.loading = true
    if (this.username !== '') {
      this._clientService.addClient(this.username).subscribe({
        next:(val) =>{
  
          this.router.navigate(['/dashboard'])
        },
        error:(err: HttpErrorResponse)=>{
          this._errorService.msjError(err);
          this.loading = false
        }
      })
    }else{
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    }
  }

}
