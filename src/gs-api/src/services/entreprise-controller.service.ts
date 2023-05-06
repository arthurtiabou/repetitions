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
class EntrepriseControllerService extends __BaseService {
  static readonly save3Path = '/gestionrepetition/V2/entreprise/create';
  static readonly findById3Path = '/gestionrepetition/V2/entreprise/{idEntreprise}';
  static readonly findByNom1Path = '/gestionrepetition/V2/entreprise/get/{nom}';
  static readonly findAll3Path = '/gestionrepetition/V2/entreprise/all';
  static readonly delete3Path = '/gestionrepetition/V2/entreprise/delete/{idEntreprise}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save3Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/entreprise/create`,
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
  }  save3(): __Observable<null> {
    return this.save3Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEntreprise undefined
   */
  findById3Response(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/entreprise/${idEntreprise}`,
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
   * @param idEntreprise undefined
   */
  findById3(idEntreprise: number): __Observable<null> {
    return this.findById3Response(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param nom undefined
   */
  findByNom1Response(nom: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/entreprise/get/${nom}`,
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
  findByNom1(nom: string): __Observable<null> {
    return this.findByNom1Response(nom).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll3Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/entreprise/all`,
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
  }  findAll3(): __Observable<null> {
    return this.findAll3Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEntreprise undefined
   */
  delete3Response(idEntreprise: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/entreprise/delete/${idEntreprise}`,
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
   * @param idEntreprise undefined
   */
  delete3(idEntreprise: number): __Observable<null> {
    return this.delete3Response(idEntreprise).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EntrepriseControllerService {
}

export { EntrepriseControllerService }
