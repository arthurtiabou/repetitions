import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { EmploiTempDto } from 'src/gs-api/src/models/EmploiTempDto';
import { EmploiTempService } from 'src/app/services/emploi-temp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-edt',
  templateUrl: './detail-edt.component.html',
  styleUrls: ['./detail-edt.component.css']
})
export class DetailEdtComponent implements OnInit {

 
  @Input()
  edtDto:EmploiTempDto= {};
  edts:EmploiTempDto[];


  constructor(
    private edtService:EmploiTempService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.edtService.getEdt()
    .subscribe((datas) => {
      this.edts=datas;
    });
  }

 



}
