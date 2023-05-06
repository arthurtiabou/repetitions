import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { ApprenantDto } from 'src/gs-api/src/models/ApprenantDto';

@Component({
  selector: 'app-nouveau-apprenant',
  templateUrl: './nouveau-apprenant.component.html',
  styleUrls: ['./nouveau-apprenant.component.css'],
  providers: [ ApprenantService]
})
export class NouveauApprenantComponent implements OnInit {

  apprenants:ApprenantDto[];
  apprenant:ApprenantDto={};
  errorMsg:Array<string>=[];

  constructor(
    private router:Router,
    private apprenantService:ApprenantService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params.id;
    if(id){
      this.apprenantService.getApprenantById(id)
      .subscribe(app =>{
        this.apprenant=app;
      });
    }

  } 

  saveClick():void{
    this.apprenantService.enregistrerApprenant(this.apprenant)
    .subscribe(app => {
      this.router.navigate(['liste-apprenant']);
      this.apprenant=app;
    },error => {
      this.errorMsg=error.error.errors;
    })
  }

  cancelClick():void{
    this.router.navigate(['liste-apprenant']);
  }

}
