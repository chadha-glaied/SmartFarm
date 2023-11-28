import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  @Input() idp
  ConsultationDto
  element
  constructor(private route: ActivatedRoute ,private router:Router, private srv: ServiceService) { }

  ngOnInit(): void {
    
    this.srv.getrapport(this.idp).subscribe((res:any)=>{console.log(res);this.ConsultationDto=res;
    
    } , (err)=>{
    
    })
  }
}
