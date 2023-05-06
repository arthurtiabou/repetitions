import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmploiTempDto } from 'src/gs-api/src/models/EmploiTempDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploiTempService {

  readonly API_URL="http://localhost:8081/emploiTemp"

  readonly ENDPOINT_EDT="/gestionrepetition/V2/create"

  readonly ENDPOINT_EDT_ALL="/gestionrepetition/V2/all"

  readonly ENDPOINT_EDT_BY_ID="/gestionrepetition/V2/get/"

  readonly ENDPOINT_EDT_DELETE="/gestionrepetition/V2/delete/"


  constructor(
    private httpClient: HttpClient
  ) { }
    getEdt():Observable<EmploiTempDto[]>{
      return this.httpClient.get<EmploiTempDto[]>
      (this.API_URL+this.ENDPOINT_EDT_ALL);
    }

    getEdtById(id:number):Observable<EmploiTempDto>{
      return this.httpClient.get<EmploiTempDto>
      (this.API_URL+this.ENDPOINT_EDT_BY_ID+id);
    }

    supprimerEdt(id:number):Observable<any>{
      if(id)
      {
        return this.httpClient.delete<EmploiTempDto>
      (this.API_URL+this.ENDPOINT_EDT_DELETE+id);
      }
    }
      
      
    enregistrerEdt(emploiTemp:EmploiTempDto):Observable<EmploiTempDto>{
      let bodyData ={
        "id": emploiTemp.id,
        "salle": emploiTemp.salle,
        "salle2": emploiTemp.salle2,
        "salle3": emploiTemp.salle3,
        "salle4": emploiTemp.salle4,
        "salle5": emploiTemp.salle5,
        "salle6": emploiTemp.salle6,
        "filiere": emploiTemp.filiere,
        "niveau": emploiTemp.niveau,
        "date": emploiTemp.date,
        "cour1": {
          "id":emploiTemp.cour1.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour2": {
          "id": emploiTemp.cour2.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour3": {
          "id": emploiTemp.cour3.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour4": {
          "id": emploiTemp.cour4.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour5": {
          "id":  emploiTemp.cour5.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour6": {
          "id":  emploiTemp.cour6.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour7": {
          "id":  emploiTemp.cour7.id,
          "enseignantDto": {
            "id": 0
          }
        },
        "cour8": {
          "id":  emploiTemp.cour8.id,
          "enseignantDto": {
            "id": 0
          }
        }
      }
      return this.httpClient.
      post<EmploiTempDto>(this.API_URL+this.ENDPOINT_EDT,bodyData);
    }
}
