import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-listep',
  templateUrl: './listep.component.html',
  styleUrls: ['./listep.component.css']
})
export class ListepComponent implements OnInit {

  constructor(private srv: ServiceService, private router: Router) { }
  PatientDTO = [];
  profile = JSON.parse(localStorage.getItem('profile'))
  ngOnInit(): void {
    console.log("hhhh")
    this.srv.getpatatt(this.profile.specialite).subscribe((res: any) => {
      console.log(res)
      this.  PatientDTO = res
    })
  }

}
