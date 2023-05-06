import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PaiementAppService } from 'src/app/services/paiement-app.service';
import { PaiementAppDto } from 'src/gs-api/src/models/PaiementAppDto';

@Component({
  selector: 'app-detail-payement-app',
  templateUrl: './detail-payement-app.component.html',
  styleUrls: ['./detail-payement-app.component.css']
})
export class DetailPayementAppComponent implements OnInit {
  @Input()
  paiementAppDto:PaiementAppDto={}
  @Output()
  suppressionResult=new EventEmitter<any>();
  paiementApps:PaiementAppDto[];
  paiementAppDelete?=-1;


  constructor(
    private router:Router,
    private paiementAppService:PaiementAppService
  ) { }

  ngOnInit(): void {
    this.paiementAppService.getPaiementApp()
    .subscribe((datas) => {
      this.paiementApps=datas;
    });
  }

  confirmerSuppression():void{
    if(this.paiementAppDto.id){
      this.paiementAppService.supprimerPaiementApp(this.paiementAppDto.id)
      .subscribe(res =>{
        this.suppressionResult.emit('success');
      },error => {
        this.suppressionResult.emit(error.error.error);
      });
    }
  }

  modifierPaiement(): void{
    this.router.navigate(['nouveaupayement',this.paiementAppDto.id]);
  }
}
