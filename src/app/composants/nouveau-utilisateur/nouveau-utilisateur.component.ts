import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { EntrepriseDto } from 'src/gs-api/src/models/EntrepriseDto';
import { UtilisateurDto } from 'src/gs-api/src/models/UtilisateurDto';

@Component({
  selector: 'app-nouvel-utisateur',
  templateUrl: './nouveau-utilisateur.component.html',
  styleUrls: ['./nouveau-utilisateur.component.css']
})
export class NouveauUtilisateurComponent implements OnInit {

  utilisateur:UtilisateurDto={};
  utilisateurs:UtilisateurDto[];
  entreprise:EntrepriseDto={};
 
  errorMsg:Array<string>=[];

  constructor(
    private router:Router,
    private utilisateurService:UtilisateurService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params.id;
    if(id){
      this.utilisateurService.getUtilisateurById(id)
      .subscribe(eng =>{
        this.utilisateur=eng;
      })};
  }
  cancelClick():void{
    this.router.navigate(['utilisateur']);
  }
  saveClick():void{
    this.utilisateur.entrepriseDto=this.entreprise;
    this.utilisateurService.enregistrerUtilisateur(this.utilisateur)
    .subscribe(subjet => {
      this.router.navigate(['utilisateur']);
      this.utilisateur=subjet;
    },error => {
      this.errorMsg=error.error.errors;
    })
  }

}
