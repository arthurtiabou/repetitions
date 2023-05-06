import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { EmploiTempDto } from 'src/gs-api/src/models/EmploiTempDto';
import { EmploiTempService } from 'src/app/services/emploi-temp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-edt',
  templateUrl: './information-edt.component.html',
  styleUrls: ['./information-edt.component.css']
})
export class InformationEdtComponent implements OnInit {

  @Input()
  edtDto:EmploiTempDto= {};
  @Output()
  suppressionResult=new EventEmitter<any>();
  edts:EmploiTempDto[];
  edtDelete?=-1;

  constructor(
    private edtService:EmploiTempService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.edtService.getEdt()
    .subscribe(data => {
      this.edts=data;
    });
  }

  confirmerSuppression():void{
    if(this.edtDto.id){
      this.edtService.supprimerEdt(this.edtDto.id)
      .subscribe(res =>{
        this.suppressionResult.emit('success');
      },error => {
        this.suppressionResult.emit(error.error.error);
      });
    }
  }
  modifierEdt(): void{
    this.router.navigate(['nouveledt',this.edtDto.id]);
  }


}
