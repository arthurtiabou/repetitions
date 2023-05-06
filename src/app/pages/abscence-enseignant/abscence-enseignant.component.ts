import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abscence-enseignant',
  templateUrl: './abscence-enseignant.component.html',
  styleUrls: ['./abscence-enseignant.component.css']
})
export class AbscenceEnseignantComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  nouvelleAbscenceEng():void{
    this.router.navigate(['nouvelleabscenceEng']);
  }
}
