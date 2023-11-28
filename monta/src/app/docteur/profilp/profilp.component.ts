import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-profilp',
  templateUrl: './profilp.component.html',
  styleUrls: ['./profilp.component.css']
})
export class ProfilpComponent implements OnInit {

  constructor(private route: ActivatedRoute ,private router:Router, private srv: ServiceService ) { }
  Patient
idp=this.route.snapshot.params['idp']
w = 50
  ngOnInit(): void {
    this.srv.getp(this.idp).subscribe((res:any)=>{console.log(res);this.Patient=res} , (err)=>{
      this.router.navigate(['/docteur'])
    })
  }

}
