import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntrepriseDto } from 'src/gs-api/src/models/EntrepriseDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  readonly API_URL="http://localhost:8081/entreprise"

  readonly ENDPOINT_ENTREPRISE="/gestionrepetition/V2/create"


  constructor(
    private httpClient:HttpClient
  ) { }

  enregistrerEntreprise(entreprise:EntrepriseDto):Observable<EntrepriseDto>{

    let bodyData ={
      "id": entreprise.id,
      "nom": entreprise.nom,
      "logo": entreprise.photo,
      "codePostale": entreprise.code,
      "adresse":entreprise.adresse
    }
    return this.httpClient.
    post<EntrepriseDto>(this.API_URL+this.ENDPOINT_ENTREPRISE,bodyData);
  }
}
