import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmploiTempDto } from 'src/gs-api/src/models/EmploiTempDto';
import { CourDto } from 'src/gs-api/src/models/CourDto';
import { CourService } from 'src/app/services/cour.service';
import { EmploiTempService } from 'src/app/services/emploi-temp.service';


@Component({
  selector: 'app-nouveau-edt',
  templateUrl: './nouveau-edt.component.html',
  styleUrls: ['./nouveau-edt.component.css']
})
export class NouveauEdtComponent implements OnInit {

  
  cour:CourDto={};
  cour2:CourDto={};
  cour3:CourDto={};
  cour4:CourDto={};
  cour5:CourDto={};
  cour6:CourDto={};
  cour7:CourDto={};
  cour8:CourDto={};

  cours:CourDto[];
  edt:EmploiTempDto={};
  edts:EmploiTempDto[];
  errorMsg:Array<string>=[];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private courService:CourService,
    private edtSercice: EmploiTempService) { }

  ngOnInit(): void {

    const id=this.activatedRoute.snapshot.params.id;
    if(id){
      this.edtSercice.getEdtById(id)
      .subscribe(eng =>{
        this.edt=eng;
      })};

    this.courService.getCour()
    .subscribe((eng) => {
      this.cours=eng;
    });

  }

  cancelClick():void{
    this.router.navigate(['edt']);
  }

  saveClick():void{
    this.edt.cour1=this.cour;
    this.edt.cour2=this.cour2;
    this.edt.cour3=this.cour3;
    this.edt.cour4=this.cour4;
    this.edt.cour5=this.cour5;
    this.edt.cour6=this.cour6;
    this.edt.cour7=this.cour7;
    this.edt.cour8=this.cour8;
    
    this.edtSercice.enregistrerEdt(this.edt)
    .subscribe(res => {
      this.router.navigate(['edt']);
     
    },error => {
        this.errorMsg=error.error.errors;
    } )
  }

}
