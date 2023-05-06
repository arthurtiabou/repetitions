import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourDto } from 'src/gs-api/src/models/CourDto';
import { CourService } from 'src/app/services/cour.service';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent implements OnInit {
  cours:CourDto[];
  errorMsg='';

  constructor(
    private courService:CourService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getCours();
  }

  getCours():void{
    this.courService.getCour()
    .subscribe((eng) => {
      this.cours=eng;
    });
  }

  handelSuppression(event:any):void{
    if(event==='success'){
      this.getCours();
    }
    else{
      this.errorMsg=event;
    }
  }

  nouveauCour(): void {
    this.router.navigate(['nouveaucour/0']);
  }
}
