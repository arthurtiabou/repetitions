import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaiementAppDto } from 'src/gs-api/src/models/PaiementAppDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementAppService {

  readonly API_URL="http://localhost:8081/paiementApp"

  readonly ENDPOINT_PAIEMENT_APP="/gestionrepetition/V2/create"

  readonly ENDPOINT_PAIEMENT_APP_ALL="/gestionrepetition/V2/all"

  readonly ENDPOINT_PAIEMENT_APP_BY_ID="/gestionrepetition/V2/get/"

  readonly ENDPOINT_PAIEMENT_APP_DELETE="/gestionrepetition/V2/delete/"

  constructor(
    private httpClient:HttpClient
  ) { }

  getPaiementApp():Observable<PaiementAppDto[]>{
    return this.httpClient.get<PaiementAppDto[]>
    (this.API_URL+this.ENDPOINT_PAIEMENT_APP_ALL);
  }

  getPaiementAppById(id:number):Observable<PaiementAppDto>{
    return this.httpClient.get<PaiementAppDto>
    (this.API_URL+this.ENDPOINT_PAIEMENT_APP_BY_ID+id);
  }

  supprimerPaiementApp(id:number):Observable<any>{
    if(id)
    {
      return this.httpClient.delete<PaiementAppDto>
    (this.API_URL+this.ENDPOINT_PAIEMENT_APP_DELETE+id);
    }
  }
    
    
  enregistrerPaiementApp(paiementApp:PaiementAppDto):Observable<PaiementAppDto>{
    let bodyData ={
      "id": paiementApp.id,
      "apprenant": {
        "id": paiementApp.apprenantDto.id
      },
      "montantVerse": paiementApp.montant
    }
    return this.httpClient.
    post<PaiementAppDto>(this.API_URL+this.ENDPOINT_PAIEMENT_APP,bodyData);
  }
}
