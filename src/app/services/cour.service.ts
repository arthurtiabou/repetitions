import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourDto } from 'src/gs-api/src/models/CourDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourService {
  readonly API_URL="http://localhost:8081/cour"

  readonly ENDPOINT_COUR="/gestionrepetition/V2/create"

  readonly ENDPOINT_COUR_ALL="/gestionrepetition/V2/all"

  readonly ENDPOINT_COUR_BY_ID="/gestionrepetition/V2/courparid/"

  readonly ENDPOINT_COUR_DELETE="/gestionrepetition/V2/delete/"


  constructor(
    private httpClient: HttpClient
  ) { }
    getCour():Observable<CourDto[]>{
      return this.httpClient.get<CourDto[]>
      (this.API_URL+this.ENDPOINT_COUR_ALL);
    }

    getCourById(id:number):Observable<CourDto>{
      return this.httpClient.get<CourDto>
      (this.API_URL+this.ENDPOINT_COUR_BY_ID+id);
    }

    supprimerCour(id:number):Observable<any>{
      if(id)
      {
        return this.httpClient.delete<CourDto>
      (this.API_URL+this.ENDPOINT_COUR_DELETE+id);
      }
    }
      
      
    enregistrerCour(cour:CourDto):Observable<CourDto>{

      let bodyData ={
        "id": cour.id,
        "matiere": cour.matiere,
        "niveau": cour.niveau,
        "filiere": cour.filiere,
        "periode": cour.periode,
        "enseignantDto": {
          "id": cour.enseignantDto.id
        }
      }
      return this.httpClient.
      post<CourDto>(this.API_URL+this.ENDPOINT_COUR,bodyData);
    }
}
