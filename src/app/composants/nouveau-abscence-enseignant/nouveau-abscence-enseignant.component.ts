import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-abscence-enseignant',
  templateUrl: './nouveau-abscence-enseignant.component.html',
  styleUrls: ['./nouveau-abscence-enseignant.component.css']
})
export class NouveauAbscenceEnseignantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancelClick():void{
    this.router.navigate(['abscenceEnseignant']);
  }
  saveClick():void{

  }

}
