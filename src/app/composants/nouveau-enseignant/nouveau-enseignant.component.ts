import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EnseignantDto } from 'src/gs-api/src/models/EnseignantDto';

@Component({
  selector: 'app-nouveau-enseignant',
  templateUrl: './nouveau-enseignant.component.html',
  styleUrls: ['./nouveau-enseignant.component.css']
})
export class NouveauEnseignantComponent implements OnInit {

  enseignants:EnseignantDto[];
  enseignant:EnseignantDto={};
  errorMsg:Array<string>=[];

  constructor(
    private router: Router,
    private enseignantService:EnseignantService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params.id;
    if(id){
      this.enseignantService.getEnseignantById(id)
      .subscribe(eng =>{
        this.enseignant=eng;
      })};
  }

  cancelClick():void {
    this.router.navigate(['liste-enseignant'])
  }
  saveClick():void{
    
    this.enseignantService.enregistrerEnseignant(this.enseignant)
    .subscribe(eng => {
      this.router.navigate(['liste-enseignant']);
      this.enseignant=eng;
    },error => {
      this.errorMsg=error.error.errors;
    })
  }

}
