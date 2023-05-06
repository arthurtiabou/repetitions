import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { EntrepriseDto } from 'src/gs-api/src/models/EntrepriseDto';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  errorMsg:Array<string>=[];
  entreprise:EntrepriseDto={};

  constructor(
    private router:Router,
    private entrepriseService:EntrepriseService
  ) { }

  ngOnInit(): void {
  }

  saveClick():void{
    this.entrepriseService.enregistrerEntreprise(this.entreprise)
    .subscribe(sub => {
      this.router.navigate(['login-utilisateur']);
      this.entreprise=sub;
    },error => {
      this.errorMsg=error.error.errors;
    })
  }

}
