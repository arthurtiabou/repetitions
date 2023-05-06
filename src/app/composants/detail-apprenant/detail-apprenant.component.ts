import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ApprenantDto } from 'src/gs-api/src/models/ApprenantDto';
import { ApprenantService } from 'src/app/services/apprenant.service';

@Component({
  selector: 'app-detail-apprenant',
  templateUrl: './detail-apprenant.component.html',
  styleUrls: ['./detail-apprenant.component.css']
})
export class DetailApprenantComponent implements OnInit {

  @Input()
  apprenantDto:ApprenantDto= {};
  @Output()
  suppressionResult=new EventEmitter<any>();
  apprenants:ApprenantDto[];
  articleDelete?=-1;

  constructor(
    private apprenantService:ApprenantService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.apprenantService.getApprenant()
    .subscribe((datas) => {
      this.apprenants=datas;
    });
  }

  confirmerSuppression():void{
    if(this.apprenantDto.id){
      this.apprenantService.supprimerApprenant(this.apprenantDto.id)
      .subscribe(res =>{
        this.suppressionResult.emit('success');
      },error => {
        this.suppressionResult.emit(error.error.error);
      });
    }
  }
  modifierApprenant(): void{
    this.router.navigate(['nouvelapprenant',this.apprenantDto.id]);
  }



}
