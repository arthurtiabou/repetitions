
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApprenantDto } from 'src/gs-api/src/models/ApprenantDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  readonly API_URL="http://localhost:8081/apprenant"

  readonly ENDPOINT_APPRENANT="/gestionrepetition/V2/create"

  readonly ENDPOINT_APPRENANT_ALL="/gestionrepetition/V2/all"

  readonly ENDPOINT_APPRENANT_BY_ID="/gestionrepetition/V2/"

  readonly ENDPOINT_APPRENANT_PUT="/gestionrepetition/V2/"

  readonly ENDPOINT_APPRENANT_DELETE="/gestionrepetition/V2/apprenant/delete/"


  constructor(
    private httpClient: HttpClient
  ) { }
    getApprenant():Observable<ApprenantDto[]>{
      return this.httpClient.get<ApprenantDto[]>
      (this.API_URL+this.ENDPOINT_APPRENANT_ALL);
    }

    getApprenantById(id:number):Observable<ApprenantDto>{
      return this.httpClient.get<ApprenantDto>
      (this.API_URL+this.ENDPOINT_APPRENANT_BY_ID+id);
    }

    supprimerApprenant(id:number):Observable<any>{
      if(id)
      {
        return this.httpClient.delete<ApprenantDto>
      (this.API_URL+this.ENDPOINT_APPRENANT_DELETE+id);
      }
    }

    modifierApprenant(id:number,apprenant:ApprenantDto):Observable<ApprenantDto>{

      let bodyData ={
        "id":apprenant.id,
        "nom": apprenant.nom,
        "prenom": apprenant.prenom,
        "photo": apprenant.photo,
        "telephone": apprenant.telephone,
        "filiere": apprenant.filiere,
        "niveau": apprenant.niveau,
        "fraisDeCour":apprenant.fraisCour,
        "estEnRegle": true
      }
      
      return this.httpClient
      .put<ApprenantDto>(this.API_URL+this.ENDPOINT_APPRENANT_PUT+id,bodyData);
    }

    enregistrerApprenant(apprenant:ApprenantDto):Observable<ApprenantDto>{

      let bodyData ={
        "id":apprenant.id,
        "nom": apprenant.nom,
        "prenom": apprenant.prenom,
        "photo": apprenant.photo,
        "telephone": apprenant.telephone,
        "filiere": apprenant.filiere,
        "niveau": apprenant.niveau,
        "fraisDeCour":apprenant.fraisCour,
        "estEnRegle": true
      }
      return this.httpClient.
      post<ApprenantDto>(this.API_URL+this.ENDPOINT_APPRENANT,bodyData);
    }
}
