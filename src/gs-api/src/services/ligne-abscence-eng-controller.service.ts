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
class LigneAbscenceEngControllerService extends __BaseService {
  static readonly save8Path = '/gestionrepetition/V2/abscenceEng/create';
  static readonly findByEnseignantIdContains1Path = '/gestionrepetition/V2/abscenceEng/{idEnseignant}';
  static readonly findById8Path = '/gestionrepetition/V2/abscenceEng/get/{idLigneAbscenceEng}';
  static readonly findAll8Path = '/gestionrepetition/V2/abscenceEng/all';
  static readonly delete8Path = '/gestionrepetition/V2/AbscenceApp/delete/{idLigneAbscenceEng}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save8Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/abscenceEng/create`,
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
  }  save8(): __Observable<null> {
    return this.save8Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEnseignant undefined
   */
  findByEnseignantIdContains1Response(idEnseignant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/abscenceEng/${idEnseignant}`,
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
  findByEnseignantIdContains1(idEnseignant: number): __Observable<null> {
    return this.findByEnseignantIdContains1Response(idEnseignant).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idLigneAbscenceEng undefined
   */
  findById8Response(idLigneAbscenceEng: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/abscenceEng/get/${idLigneAbscenceEng}`,
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
   * @param idLigneAbscenceEng undefined
   */
  findById8(idLigneAbscenceEng: number): __Observable<null> {
    return this.findById8Response(idLigneAbscenceEng).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll8Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/abscenceEng/all`,
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
  }  findAll8(): __Observable<null> {
    return this.findAll8Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idLigneAbscenceEng undefined
   */
  delete8Response(idLigneAbscenceEng: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/AbscenceApp/delete/${idLigneAbscenceEng}`,
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
   * @param idLigneAbscenceEng undefined
   */
  delete8(idLigneAbscenceEng: number): __Observable<null> {
    return this.delete8Response(idLigneAbscenceEng).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module LigneAbscenceEngControllerService {
}

export { LigneAbscenceEngControllerService }
