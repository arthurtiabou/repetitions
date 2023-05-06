import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantDto } from 'src/gs-api/src/models/EnseignantDto';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  enseignants:EnseignantDto[];
  errorMsg='';

  constructor(
    private enseignantService:EnseignantService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getEnseignants();
  }

  getEnseignants():void{
    this.enseignantService.getEnseignant()
    .subscribe((eng) => {
      this.enseignants=eng;
    });
  }

  handelSuppression(event:any):void{
    if(event==='success'){
      this.getEnseignants();
    }
    else{
      this.errorMsg=event;
    }
  }
  nouvelEnseignant():void{
    this.router.navigate(['nouvelenseignant/:0']);
  }
}
