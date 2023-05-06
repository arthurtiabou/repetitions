import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApprenantDto } from 'src/gs-api/src/models/ApprenantDto';
import { ApprenantService } from 'src/app/services/apprenant.service';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {

  apprenants:ApprenantDto[];
  errorMsg='';

  constructor(
    private apprenantService:ApprenantService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getApprenants();
  }

  getApprenants():void{
    this.apprenantService.getApprenant()
    .subscribe((app) => {
      this.apprenants=app;
    });
  }

  handelSuppression(event:any):void{
    if(event==='success'){
      this.getApprenants();
    }
    else{
      this.errorMsg=event;
    }
  }
  nouvelApprenant():void{
    this.router.navigate(['nouvelapprenant/:0']);
  }
}
