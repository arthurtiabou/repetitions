import { Component, OnInit ,Input,Output} from '@angular/core';
import { PaiementAppService } from 'src/app/services/paiement-app.service';
import { PaiementAppDto } from 'src/gs-api/src/models/PaiementAppDto';

@Component({
  selector: 'app-detail-app',
  templateUrl: './detail-app.component.html',
  styleUrls: ['./detail-app.component.css']
})
export class DetailAppComponent implements OnInit {

  @Input()
  paiementAppDto :PaiementAppDto={}
  @Output()
  paiementApps: PaiementAppDto[];
  
  constructor(
    private paiementAppService:PaiementAppService
  ) { }

  ngOnInit(): void {
    this.paiementAppService.getPaiementApp()
    .subscribe((datas) => {
      this.paiementApps=datas;
    });
  }

}
