/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class EnseignantControllerService extends __BaseService {
  static readonly save4Path = '/gestionrepetition/V2/enseignant/create';
  static readonly findByNom2Path = '/gestionrepetition/V2/enseignant/{nom}';
  static readonly findById4Path = '/gestionrepetition/V2/enseignant/get/{idEnseignant}';
  static readonly findAll4Path = '/gestionrepetition/V2/enseignant/all';
  static readonly delete4Path = '/gestionrepetition/V2/enseignant/delete/{idEnseignant}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save4Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/enseignant/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  save4(): __Observable<null> {
    return this.save4Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param nom undefined
   */
  findByNom2Response(nom: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/enseignant/${nom}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param nom undefined
   */
  findByNom2(nom: string): __Observable<null> {
    return this.findByNom2Response(nom).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEnseignant undefined
   */
  findById4Response(idEnseignant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/enseignant/get/${idEnseignant}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idEnseignant undefined
   */
  findById4(idEnseignant: number): __Observable<null> {
    return this.findById4Response(idEnseignant).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll4Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/enseignant/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }  findAll4(): __Observable<null> {
    return this.findAll4Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEnseignant undefined
   */
  delete4Response(idEnseignant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/enseignant/delete/${idEnseignant}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idEnseignant undefined
   */
  delete4(idEnseignant: number): __Observable<null> {
    return this.delete4Response(idEnseignant).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EnseignantControllerService {
}

export { EnseignantControllerService }
