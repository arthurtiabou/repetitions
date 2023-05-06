import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-payement-enseignant',
  templateUrl: './nouveau-payement-enseignant.component.html',
  styleUrls: ['./nouveau-payement-enseignant.component.css']
})
export class NouveauPayementEnseignantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancelClick():void {
    this.router.navigate(['payementenseignant']);
  }
  saveClick():void {

  }

}
