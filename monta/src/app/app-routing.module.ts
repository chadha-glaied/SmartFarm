import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiverCompteComponent } from './admin/activer-compte/activer-compte.component';
import{ActiverCompte2Component} from './activer-compte2/activer-compte2.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutdComponent } from './admin/ajoutd/ajoutd.component';
import { AjouteUtlisateurComponent } from './admin/ajoute-utlisateur/ajoute-utlisateur.component';
import { ListedComponent } from './admin/listed/listed.component';

import { StatistiqueComponent } from './admin/statistique/statistique.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DocteurComponent } from './docteur/docteur.component';
import { ListepComponent } from './docteur/listep/listep.component';
import { AnalyseComponent } from './docteur/profilp/analyse/analyse.component';
import { DemandeComponent } from './docteur/profilp/demande/demande.component';
import { DossiermedicaleComponent } from './docteur/profilp/dossiermedicale/dossiermedicale.component';
import { FicheDeTriageComponent } from './docteur/profilp/fiche-de-triage/fiche-de-triage.component';
import { ProfilpComponent } from './docteur/profilp/profilp.component';
import { RapportComponent } from './docteur/profilp/rapport/rapport.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValidationComponent } from './register/validation/validation.component';
import { ProdilepaComponent } from './technicien/prodilepa/prodilepa.component';
import { TechnicienComponent } from './technicien/technicien.component';
import { SafetyComponent } from './admin/safety/safety.component';



const routes: Routes = [


  {
    path: 'confirm',
    component: ConfirmComponent
  },
  


  {
    path: 'rapport/:idp',
    component: RapportComponent
  },
  {
    path: 'fichet/:idp',
    component: FicheDeTriageComponent

  },
  {
    path: 'dossiermedicale/:idp',
    component: DossiermedicaleComponent

  },
 
  {
    path: 'analyse/:idp',
    component: AnalyseComponent

  },
  {
    path: 'docteur',
    component: DocteurComponent,

    children: [
      {
        path : '' , redirectTo:'/docteur/listep' , pathMatch : 'full'
      },{
      path: 'profilp/:idp',
      component: ProfilpComponent
    },
    {
      path: 'listep',
      component: ListepComponent
    },


    ]
  },




  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path : '' , redirectTo:'/admin/statistique' , pathMatch : 'full'
      },
      {
      path: 'listeU',
      component: ListedComponent
      },
      
      {
      path: 'safety',
      component: SafetyComponent
      },
    {
      path: 'Activer',
      component: ActiverCompteComponent
    },
    {
      path: 'listeP',
      component: AjoutdComponent
    },
    {
      path: 'AjouterUtilisateur',
      component: AjouteUtlisateurComponent
    },
    
    {
      path: 'statistique',
      component: StatistiqueComponent
    },]
  },


  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'register',
    component: RegisterComponent

  },
  {
    path: 'Activer2',
    component: ActiverCompte2Component
  },
  {
    path: 'technicien',
    component: TechnicienComponent,
    children:[
      {
        path: 'profilpa/:idp',
        component: ProdilepaComponent
    
      },
    ]

  },
  

  

  {
    path: '',
    component: LoginComponent,

  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
