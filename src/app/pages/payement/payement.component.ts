import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaiementAppService } from 'src/app/services/paiement-app.service';
import { PaiementAppDto } from 'src/gs-api/src/models/PaiementAppDto';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {

  paiements:PaiementAppDto[];
  errorMsg='';

  constructor(
    private router:Router,
    private paiementService:PaiementAppService
  ) { }

  ngOnInit(): void {
    this.getPaiements();
  }


  getPaiements():void{
    this.paiementService.getPaiementApp()
    .subscribe(app => {
      this.paiements=app;
    });
  }

  handelSuppression(event:any):void{
    if(event==='success'){
      this.getPaiements();
    }
    else{
      this.errorMsg=event;
    }
  }

  nouveauPaiement():void{
    this.router.navigate(['nouveaupayement/0']);
  }


}
