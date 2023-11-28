import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationForCreationDto } from 'src/app/classe/consultation-for-creation-dto';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dossiermedicale',
  templateUrl: './dossiermedicale.component.html',
  styleUrls: ['./dossiermedicale.component.css']

})
export class DossiermedicaleComponent implements OnInit {
cons:ConsultationForCreationDto=new ConsultationForCreationDto()
  constructor(private srv: ServiceService, private router: Router) { }
  @Input() idp
  ngOnInit(): void {
  }
  validerC() {

    if(this.idp){
      console.log(this.cons)
    this.srv.validerC(this.idp,this.cons)
      .subscribe(
        (result) => { // success
          console.log(result)
          this.cons = new ConsultationForCreationDto()
          Swal.fire('Valider', '', 'success')
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err)
          Swal.fire('Invalid ', '', 'error')
        }
  
      )
    }
  }

}
