import { Component,EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-action-bouton',
  templateUrl: './action-bouton.component.html',
  styleUrls: ['./action-bouton.component.css']
})
export class ActionBoutonComponent implements OnInit {

  @Output()
  clickEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }


}
