import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-fiche-de-triage',
  templateUrl: './fiche-de-triage.component.html',
  styleUrls: ['./fiche-de-triage.component.css']
})
export class FicheDeTriageComponent implements OnInit {
@Input() idp
fiche_triage
element
  constructor(private route: ActivatedRoute ,private router:Router, private srv: ServiceService) { }

  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getft(this.idp).subscribe((res:any)=>{console.log(res);this.fiche_triage=res ; this.element = res} , (err)=>{
    
    })
  }


}
