import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { UtilisateurDto } from 'src/gs-api/src/models/UtilisateurDto';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {

  @Input()
  utilisateurDto:UtilisateurDto= {};
  @Output()
  suppressionResult=new EventEmitter<any>();
  utilisateurs:UtilisateurDto[];
  utilisateurDelete?=-1;

  constructor(
    private utilisateurService:UtilisateurService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    this.utilisateurService.getUtilisateur()
    .subscribe((datas) => {
      this.utilisateurs=datas;
    });
  }

  confirmerSuppression():void{
    if(this.utilisateurDto.id){
      this.utilisateurService.supprimerUtilisateur(this.utilisateurDto.id)
      .subscribe(res =>{
        this.suppressionResult.emit('success');
      },error => {
        this.suppressionResult.emit(error.error.error);
      });
    }
  }

  modifierUtilisateur(): void{
    this.router.navigate(['nouvelutilisateur',this.utilisateurDto.id]);
  }
}
