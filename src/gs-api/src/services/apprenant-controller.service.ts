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
class ApprenantControllerService extends __BaseService {
  static readonly save7Path = '/gestionrepetition/V2/apprenant/create';
  static readonly findById7Path = '/gestionrepetition/V2/apprenant/{idApprenant}';
  static readonly findByNom3Path = '/gestionrepetition/V2/apprenant/nom/{nom}';
  static readonly findAll7Path = '/gestionrepetition/V2/apprenant/all';
  static readonly delete7Path = '/gestionrepetition/V2/apprenant/delete/{idApprenant}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save7Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/apprenant/create`,
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
  }  save7(): __Observable<null> {
    return this.save7Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idApprenant undefined
   */
  findById7Response(idApprenant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/apprenant/${idApprenant}`,
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
  findById7(idApprenant: number): __Observable<null> {
    return this.findById7Response(idApprenant).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param nom undefined
   */
  findByNom3Response(nom: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/apprenant/nom/${nom}`,
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
  findByNom3(nom: string): __Observable<null> {
    return this.findByNom3Response(nom).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll7Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/apprenant/all`,
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
  }  findAll7(): __Observable<null> {
    return this.findAll7Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idApprenant undefined
   */
  delete7Response(idApprenant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/apprenant/delete/${idApprenant}`,
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
  delete7(idApprenant: number): __Observable<null> {
    return this.delete7Response(idApprenant).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ApprenantControllerService {
}

export { ApprenantControllerService }
