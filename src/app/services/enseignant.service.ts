
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnseignantDto } from 'src/gs-api/src/models/EnseignantDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  readonly API_URL="http://localhost:8081/enseignant"

  readonly ENDPOINT_ENSEIGNANT="/gestionrepetition/V2/enseignant/create"

  readonly ENDPOINT_ENSEIGNANT_ALL="/gestionrepetition/V2/all"

  readonly ENDPOINT_ENSEIGNANT_BY_ID="/gestionrepetition/V2/get/"

  readonly ENDPOINT_ENSEIGNANT_DELETE="/gestionrepetition/V2/delete/"


  constructor(
    private httpClient: HttpClient
  ) { }
    getEnseignant():Observable<EnseignantDto[]>{
      return this.httpClient.get<EnseignantDto[]>
      (this.API_URL+this.ENDPOINT_ENSEIGNANT_ALL);
    }

    getEnseignantById(id:number):Observable<EnseignantDto>{
      return this.httpClient.get<EnseignantDto>
      (this.API_URL+this.ENDPOINT_ENSEIGNANT_BY_ID+id);
    }

    supprimerEnseignant(id:number):Observable<any>{
      if(id)
      {
        return this.httpClient.delete<EnseignantDto>
      (this.API_URL+this.ENDPOINT_ENSEIGNANT_DELETE+id);
      }
    }
      
      
    enregistrerEnseignant(enseignant:EnseignantDto):Observable<EnseignantDto>{

      let bodyData ={
        "id":enseignant.id ,
        "nom": enseignant.nom,
        "telephone": enseignant.telephone,
        "photo": enseignant.photo,
        "email": enseignant.email,
        "niveau": enseignant.niveau,
        "matiere": enseignant.matiere,
        "estSolde": true,
        "tauxHoraire": enseignant.fraisCour,
        "prenom": enseignant.prenom
      }
      return this.httpClient.
      post<EnseignantDto>(this.API_URL+this.ENDPOINT_ENSEIGNANT,bodyData);
    }
}
