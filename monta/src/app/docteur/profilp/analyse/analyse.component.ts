import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichePatient } from 'src/app/classe/fiche-patient';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {
  fich: FichePatient = new FichePatient();
  Fiche_Patient = [];
  @Input() idp
  constructor(private srv: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getanalyse(this.idp).subscribe((res: any) => { console.log(res); this.Fiche_Patient = res }, (err) => {

    })
  }
  ajouttype() {
    console.log(this.fich)
    if (this.idp) {
      this.srv.ajouttype(this.fich , this.idp)
        .subscribe(
          (result) => { // success
            console.log(result)
            this.ngOnInit()
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
