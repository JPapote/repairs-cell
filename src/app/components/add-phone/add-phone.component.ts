import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FixedPhone } from 'src/app/interfaces/fixedPhone';
import { Phone } from 'src/app/interfaces/phone';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {
  
  reparationPhone:any[]=[]
  listPhone: Phone[] = []
  namePhone: string = ''
  number!: number
  loading: boolean = false
  id: any
  constructor(private router: ActivatedRoute, private toastr: ToastrService,
    private route: Router, private _serviceClient: ClientService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id')
    this.listPhoneClient()
  }

  addClient() {
    if (this.namePhone == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return
    } else {
      this._serviceClient.newPhone(this.namePhone, this.id, this.number).subscribe({
        next: (value) => {

          this.route.navigate(['/dashboard'])
        },
        error: (err) => {
          this.toastr.error(err);
        }
      })
    }
  }
  reparation(id?:any){
    this.route.navigate(['reparation/' + id])
  }
  listPhoneClient() {
    this._serviceClient.getPhoneClient(this.id).subscribe((data:any) => {
      this.listPhone = data;
 
      this.listPhone.forEach(el => {
        console.log(el.fixedPhones)
        this.reparationPhone.push(el.fixedPhones)
      })
      console.log(this.reparationPhone)
    })
  }
}
