import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payement-eng',
  templateUrl: './payement-eng.component.html',
  styleUrls: ['./payement-eng.component.css']
})
export class PayementEngComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  nouveauPaiementEng(){
    this.router.navigate(['nouveaupaiementeng']);
  }
}
