import { Component, OnInit } from '@angular/core';
import { UtilisateurDto } from 'src/gs-api/src/models/UtilisateurDto';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
import { EntrepriseDto } from 'src/gs-api/src/models/EntrepriseDto';

@Component({
  selector: 'app-login-utilisateur',
  templateUrl: './login-utilisateur.component.html',
  styleUrls: ['./login-utilisateur.component.css']
})
export class LoginUtilisateurComponent implements OnInit {

  utilisateur:UtilisateurDto={};
  entreprise:EntrepriseDto={};
  errorMsg:Array<string>=[];

  constructor(
    private router:Router,
    private utilisateurService:UtilisateurService
  ) { }

  ngOnInit(): void {
  }

  saveClick():void{
    this.utilisateur.entrepriseDto=this.entreprise;
    this.entreprise.id=1;
    this.utilisateur.role='admin';
    this.utilisateurService.enregistrerUtilisateur(this.utilisateur)
    .subscribe(res => {
      this.router.navigate(['vue']);
      this.utilisateur=res;
    },error => {
      this.errorMsg=error.error.errors;
    })
  }
}
