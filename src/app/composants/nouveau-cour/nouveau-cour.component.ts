import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { CourDto } from 'src/gs-api/src/models/CourDto';
import { EnseignantDto } from 'src/gs-api/src/models/EnseignantDto';

@Component({
  selector: 'app-nouveau-cour',
  templateUrl: './nouveau-cour.component.html',
  styleUrls: ['./nouveau-cour.component.css']
})
export class NouveauCourComponent implements OnInit {

  cour:CourDto={};
  cours:CourDto[];
  enseignants:EnseignantDto[];
  enseignant:EnseignantDto={};
  errorMsg:Array<string>=[];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private courService:CourService,
    private enseignantService:EnseignantService) { }

  ngOnInit(): void {

    const id=this.activatedRoute.snapshot.params.id;
    if(id){
      this.courService.getCourById(id)
      .subscribe(eng =>{
        this.cour=eng;
      })};

    this.enseignantService.getEnseignant()
    .subscribe((eng) => {
      this.enseignants=eng;
    });
  }
  
  cancelClick():void{
    this.router.navigate(['cour']);
  }

  saveClick():void{
    this.cour.enseignantDto=this.enseignant;
    this.courService.enregistrerCour(this.cour)
    .subscribe(subjet => {
      this.router.navigate(['cour']);
      this.cour=subjet;
    },error => {
      this.errorMsg=error.error.errors;
    })
  }

}
