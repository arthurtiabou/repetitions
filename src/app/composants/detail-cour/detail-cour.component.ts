import { Component, OnInit,Output,Input ,EventEmitter} from '@angular/core';
import { CourDto } from 'src/gs-api/src/models/CourDto';
import { CourService } from 'src/app/services/cour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cour',
  templateUrl: './detail-cour.component.html',
  styleUrls: ['./detail-cour.component.css']
})
export class DetailCourComponent implements OnInit {
  @Input()
  courDto:CourDto= {};
  @Output()
  suppressionResult=new EventEmitter<any>();
  cours:CourDto[];
  courDelete?=-1;

  constructor(
    private courService:CourService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.courService.getCour()
    .subscribe((datas) => {
      this.cours=datas;
    });
  }

  confirmerSuppression():void{
    if(this.courDto.id){
      this.courService.supprimerCour(this.courDto.id)
      .subscribe(res =>{
        this.suppressionResult.emit('success');
      },error => {
        this.suppressionResult.emit(error.error.error);
      });
    }
  }
  modifierCour(): void{
    this.router.navigate(['nouveaucour',this.courDto.id]);
  }


}
