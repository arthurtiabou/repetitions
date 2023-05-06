import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurDto } from 'src/gs-api/src/models/UtilisateurDto';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs:UtilisateurDto[];
  errorMsg='';

  constructor(
    private utilisateurService:UtilisateurService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs():void{
    this.utilisateurService.getUtilisateur()
    .subscribe((eng) => {
      this.utilisateurs=eng;
    });
  }

  handelSuppression(event:any):void{
    if(event==='success'){
      this.getUtilisateurs();
    }
    else{
      this.errorMsg=event;
    }
  }

  nouvelUtilisateur():void{
    this.router.navigate(['nouvelutilisateur/0']);
  }
}
