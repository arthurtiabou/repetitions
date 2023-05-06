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
class PaiementEngControllerService extends __BaseService {
  static readonly save1Path = '/gestionrepetition/V2/paiementeng/create';
  static readonly findByEnseignantIdContainsPath = '/gestionrepetition/V2/paiementeng/{idEnseignant}';
  static readonly findById1Path = '/gestionrepetition/V2/paiementeng/get/{idPaiementEng}';
  static readonly findAll1Path = '/gestionrepetition/V2/paiementEng/all';
  static readonly delete1Path = '/gestionrepetition/V2/paiementEng/delete/{idPaiementEng}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/paiementeng/create`,
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
  }  save1(): __Observable<null> {
    return this.save1Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEnseignant undefined
   */
  findByEnseignantIdContainsResponse(idEnseignant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/paiementeng/${idEnseignant}`,
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
  findByEnseignantIdContains(idEnseignant: number): __Observable<null> {
    return this.findByEnseignantIdContainsResponse(idEnseignant).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idPaiementEng undefined
   */
  findById1Response(idPaiementEng: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/paiementeng/get/${idPaiementEng}`,
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
   * @param idPaiementEng undefined
   */
  findById1(idPaiementEng: number): __Observable<null> {
    return this.findById1Response(idPaiementEng).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll1Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/paiementEng/all`,
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
  }  findAll1(): __Observable<null> {
    return this.findAll1Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idPaiementEng undefined
   */
  delete1Response(idPaiementEng: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/paiementEng/delete/${idPaiementEng}`,
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
   * @param idPaiementEng undefined
   */
  delete1(idPaiementEng: number): __Observable<null> {
    return this.delete1Response(idPaiementEng).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PaiementEngControllerService {
}

export { PaiementEngControllerService }
