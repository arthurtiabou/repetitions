import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abscence',
  templateUrl: './abscence.component.html',
  styleUrls: ['./abscence.component.css']
})
export class AbscenceComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  nouvelleAbscence():void{
    this.router.navigate(['nouvelleabscenceapp'])
  }
}
