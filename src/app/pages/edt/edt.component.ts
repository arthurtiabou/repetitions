import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmploiTempService } from 'src/app/services/emploi-temp.service';
import { EmploiTempDto } from 'src/gs-api/src/models/EmploiTempDto';


@Component({
  selector: 'app-edt',
  templateUrl: './edt.component.html',
  styleUrls: ['./edt.component.css']
})
export class EdtComponent implements OnInit {

  edts:EmploiTempDto[];
  errorMsg='';

  constructor(
    private router:Router,
    private edtService:EmploiTempService
  ) { }

  ngOnInit(): void {
    this.getEdts();
  }

  getEdts():void{
    this.edtService.getEdt()
    .subscribe((eng) => {
      this.edts=eng;
    });
  }

  handelSuppression(event:any):void{
    if(event==='success'){
      this.getEdts();
    }
    else{
      this.errorMsg=event;
    }
  }

  nouvelEdt(): void {
      this.router.navigate(['nouveledt/0']);
  }

}
