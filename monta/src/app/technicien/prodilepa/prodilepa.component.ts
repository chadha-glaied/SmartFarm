import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichePatient } from 'src/app/classe/fiche-patient';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prodilepa',
  templateUrl: './prodilepa.component.html',
  styleUrls: ['./prodilepa.component.css']
})
export class ProdilepaComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private router:Router, private srv: ServiceService ) { }
  Patient
  fich: FichePatient = new FichePatient();
  Fiche_Patient = [];
idp=this.route.snapshot.params['idp']
  ngOnInit(): void {
    this.srv.getp(this.idp).subscribe((res:any)=>{
      
      console.log(res);this.Patient=res
      this.srv.getanalysed(this.idp).subscribe((res: any) => { console.log(res); this.Fiche_Patient = res }, (err) => {

      })
    
    } , (err)=>{
      this.router.navigate(['/technicien'])
    })

  }


  ajouttype(id) {
    console.log(this.fich)
    if (this.idp) {
      this.srv.ajoutana(this.fich , id)
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

  pdf(event){
    console.log(event.target.files)
    if(event.target.files &&  event.target.files.length >0){
      this.fich.url_piece = event.target.files[0].name
    }
  }

}
