import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-repetition',
  templateUrl: './menu-repetition.component.html',
  styleUrls: ['./menu-repetition.component.css']
})
export class MenuRepetitionComponent implements OnInit {

  public menuProperties : Array<Menu> =[
    {
      id:'1',
      icon:'fa-solid fa-chart-pie',
      titre:'Tableau bord',
      url:'',
      sousMenu:[
      {
        id: '11',
        titre: 'vue',
        icon:'',
        url:'vue'
      },
      {
        id: '12',
        titre: 'statistiques',
        icon:'',
        url:''
      }
    ]
    },
      {
        id:'2',
      icon:'fa-sharp fa-solid fa-user-graduate',
      titre:'Apprenants',
      url:'',
      sousMenu:[
        {
          id: '21',
          titre: 'Liste',
          icon:'',
          url:'liste-apprenant'
        },
        {
          id: '22',
          titre: 'Abscences',
          icon:'',
          url:'abscenceapprenant'
        }
      ]
      },
      {
        id:'3',
      icon:'fa-solid fa-person-chalkboard',
      titre:'Enseignants',
      url:'',
      sousMenu:[
        {
          id: '31',
          titre: 'Liste',
          icon:'',
          url:'liste-enseignant'
        },
        {
          id: '32',
          titre: 'Abscence',
          icon:'',
          url:'abscenceEnseignant'
        }
      ]
      },
      {
        id:'4',
      icon:'fa-solid fa-pen-to-square',
      titre:'Programme',
      url:'',
      sousMenu:[
        {
          id: '41',
          titre: 'Cours',
          icon:'',
          url:'cour'
        },
        {
          id: '42',
          titre: 'EDT',
          icon:'',
          url:'edt'
        },
        {
          id: '43',
          titre: 'Fiche presence',
          icon:'',
          url:''
        }
      ]
      },
      {
        id:'5',
      icon:'fa-solid fa-wallet',
      titre:'Payements',
      url:'',
      sousMenu:[
        {
          id: '51',
          titre: 'Enseignants',
          icon:'',
          url:'payementenseignant'
        },
        {
          id: '52',
          titre: 'Apprenants',
          icon:'',
          url:'payementapprenant'
        }
      ]},
        {
          id:'6',
        icon:'fa-solid fa-gear',
        titre:'Parametrage',
        url:'',
        sousMenu:[
          {
            id: '61',
            titre: 'Inscription',
            icon:'',
            url:''
          },
          {
            id: '62',
            titre: 'Utilisateurs',
            icon:'',
            url:'utilisateur'
          }
      ]
      }
    ];

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  navigate(url?:string): void {
    this.router.navigate([url]);
  }

}
