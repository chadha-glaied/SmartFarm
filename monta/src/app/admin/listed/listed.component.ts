import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.css']
})
export class ListedComponent implements OnInit {

  constructor(private srv: ServiceService, private router: Router) { }
  ProfileDto = [];
  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getUser().subscribe((res: any) => {

      console.log(res)
      this.ProfileDto = res
    })

  }

  supprimer(id_Profile) {
    this.srv.removeUser(id_Profile)
      .subscribe(() => {
        Swal.fire('Suppression avec succès', '', 'success')
        this.ngOnInit()
      })
  }
}


