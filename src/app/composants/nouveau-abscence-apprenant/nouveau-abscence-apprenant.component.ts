import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-abscence-apprenant',
  templateUrl: './nouveau-abscence-apprenant.component.html',
  styleUrls: ['./nouveau-abscence-apprenant.component.css']
})
export class NouveauAbscenceApprenantComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancelClick():void{
    this.router.navigate(['abscenceapprenant']);
  }
  saveClick():void{
    
  }
}
