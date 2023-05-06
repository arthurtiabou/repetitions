import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilisateurDto } from 'src/gs-api/src/models/UtilisateurDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  readonly API_URL="http://localhost:8081/utilisateur"

  readonly ENDPOINT_UTILISATEUR="/gestionrepetition/V2/create"

  readonly ENDPOINT_UTILISATEUR_ALL="/gestionrepetition/V2/all"

  readonly ENDPOINT_UTILISATEUR_BY_ID="/gestionrepetition/V2/get/"

  readonly ENDPOINT_UTILISATEUR_DELETE="/gestionrepetition/V2/delete/"

  constructor(
    private httpClient:HttpClient
  ) { }

  getUtilisateur():Observable<UtilisateurDto[]>{
    return this.httpClient.get<UtilisateurDto[]>
    (this.API_URL+this.ENDPOINT_UTILISATEUR_ALL);
  }

  getUtilisateurById(id:number):Observable<UtilisateurDto>{
    return this.httpClient.get<UtilisateurDto>
    (this.API_URL+this.ENDPOINT_UTILISATEUR_BY_ID+id);
  }

  supprimerUtilisateur(id:number):Observable<any>{
    if(id)
    {
      return this.httpClient.delete<UtilisateurDto>
    (this.API_URL+this.ENDPOINT_UTILISATEUR_DELETE+id);
    }
  }
    
    
  enregistrerUtilisateur(utilisateur:UtilisateurDto):Observable<UtilisateurDto>{

    let bodyData ={
      "id": utilisateur.id,
      "nom": utilisateur.nom,
      "prenom": utilisateur.prenom,
      "email": utilisateur.email,
      "telephnone": utilisateur.telephone,
      "photo": utilisateur.photo,
      "motDePasse": utilisateur.motPasse,
      "role": utilisateur.role,
      "entrepriseDto": {
        "id": utilisateur.entrepriseDto.id
      }
    }
    return this.httpClient.
    post<UtilisateurDto>(this.API_URL+this.ENDPOINT_UTILISATEUR,bodyData);
  }
}
