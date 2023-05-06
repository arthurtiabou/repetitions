import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mot-passe',
  templateUrl: './changer-mot-passe.component.html',
  styleUrls: ['./changer-mot-passe.component.css']
})
export class ChangerMotPasseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  cancelClick():void{
    this.router.navigate(['profil']);
  }
  saveClick():void{
    
  }
}
