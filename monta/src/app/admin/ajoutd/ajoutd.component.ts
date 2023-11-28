import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajoutd',
  templateUrl: './ajoutd.component.html',
  styleUrls: ['./ajoutd.component.css']
})
export class AjoutdComponent implements OnInit {

  constructor(private srv: ServiceService, private router: Router) { }
  patientDTO= [];
  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getpat().subscribe((res: any) => {
      console.log(res)
      this.patientDTO= res
    })

  }
  supprimer(iD_Patient) {
    this.srv.removePat(iD_Patient)
      .subscribe(() => {
        Swal.fire('Suppression avec succès', '', 'success')
        this.ngOnInit()
      })
  }
}
