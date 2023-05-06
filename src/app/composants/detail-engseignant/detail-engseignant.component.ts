import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantDto } from 'src/gs-api/src/models/EnseignantDto';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-detail-engseignant',
  templateUrl: './detail-engseignant.component.html',
  styleUrls: ['./detail-engseignant.component.css']
})
export class DetailEngseignantComponent implements OnInit {

  @Input()
  enseignantDto:EnseignantDto= {};
  @Output()
  suppressionResult=new EventEmitter<any>();
  enseignants:EnseignantDto[];
  enseignantDelete?=-1;

  constructor(
    private enseignantService:EnseignantService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.enseignantService.getEnseignant()
    .subscribe((datas) => {
      this.enseignants=datas;
    });
  }

  confirmerSuppression():void{
    if(this.enseignantDto.id){
      this.enseignantService.supprimerEnseignant(this.enseignantDto.id)
      .subscribe(res =>{
        this.suppressionResult.emit('success');
      },error => {
        this.suppressionResult.emit(error.error.error);
      });
    }
  }
  modifierEnseignant(): void{
    this.router.navigate(['nouvelenseignant',this.enseignantDto.id]);
  }



}
