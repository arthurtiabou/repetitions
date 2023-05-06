import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { PaiementAppService } from 'src/app/services/paiement-app.service';
import { ApprenantDto } from 'src/gs-api/src/models/ApprenantDto';
import { PaiementAppDto } from 'src/gs-api/src/models/PaiementAppDto';

@Component({
  selector: 'app-nouveau-payement-apprenant',
  templateUrl: './nouveau-payement-apprenant.component.html',
  styleUrls: ['./nouveau-payement-apprenant.component.css']
})
export class NouveauPayementApprenantComponent implements OnInit {

  paiementApp:PaiementAppDto={};
  paiementApps:PaiementAppDto[];
  apprenants:ApprenantDto[];
  apprenant:ApprenantDto={};
  errorMsg:Array<string>=[];

  constructor(
    private router:Router,
    private apprenantService:ApprenantService,
    private paiementAppService:PaiementAppService) { }

  ngOnInit(): void {
    this.apprenantService.getApprenant()
    .subscribe((app) => {
      this.apprenants=app;
    });
  }


  cancelClick(): void{
    this.router.navigate(['payementapprenant']);
  }

  saveClick(): void{

    this.paiementApp.apprenantDto=this.apprenant;
    this.paiementAppService.enregistrerPaiementApp(this.paiementApp)
    .subscribe(subjet => {
      this.router.navigate(['payementapprenant']);
      this.paiementApp=subjet
    },error => {
      this.errorMsg=error.error.errors
    })
  }
}
