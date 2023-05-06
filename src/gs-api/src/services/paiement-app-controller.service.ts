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
class PaiementAppControllerService extends __BaseService {
  static readonly save2Path = '/gestionrepetition/V2/paiementapp/create';
  static readonly findByApprenantIdContainsPath = '/gestionrepetition/V2/paiementapp/{idApprenant}';
  static readonly findById2Path = '/gestionrepetition/V2/paiementapp/get/{idPaiementApp}';
  static readonly findAll2Path = '/gestionrepetition/V2/paiementApp/all';
  static readonly delete2Path = '/gestionrepetition/V2/paiementApp/delete/{idPaiementApp}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save2Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/paiementapp/create`,
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
  }  save2(): __Observable<null> {
    return this.save2Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idApprenant undefined
   */
  findByApprenantIdContainsResponse(idApprenant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/paiementapp/${idApprenant}`,
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
   * @param idApprenant undefined
   */
  findByApprenantIdContains(idApprenant: number): __Observable<null> {
    return this.findByApprenantIdContainsResponse(idApprenant).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idPaiementApp undefined
   */
  findById2Response(idPaiementApp: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/paiementapp/get/${idPaiementApp}`,
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
   * @param idPaiementApp undefined
   */
  findById2(idPaiementApp: number): __Observable<null> {
    return this.findById2Response(idPaiementApp).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll2Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/paiementApp/all`,
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
  }  findAll2(): __Observable<null> {
    return this.findAll2Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idPaiementApp undefined
   */
  delete2Response(idPaiementApp: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/paiementApp/delete/${idPaiementApp}`,
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
   * @param idPaiementApp undefined
   */
  delete2(idPaiementApp: number): __Observable<null> {
    return this.delete2Response(idPaiementApp).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PaiementAppControllerService {
}

export { PaiementAppControllerService }
