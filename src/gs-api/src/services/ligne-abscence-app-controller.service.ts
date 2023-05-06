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
class LigneAbscenceAppControllerService extends __BaseService {
  static readonly save9Path = '/gestionrepetition/V2/abscenceApp/create';
  static readonly findByApprenantIdContains1Path = '/gestionrepetition/V2/abscenceApp/{idApprenant}';
  static readonly findById9Path = '/gestionrepetition/V2/abscenceApp/get/{idLigneAbscenceApp}';
  static readonly findAll9Path = '/gestionrepetition/V2/abscenceApp/all';
  static readonly delete9Path = '/gestionrepetition/V2/AbscenceApp/delete/{idLigneAbscenceApp}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save9Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/abscenceApp/create`,
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
  }  save9(): __Observable<null> {
    return this.save9Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idApprenant undefined
   */
  findByApprenantIdContains1Response(idApprenant: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/abscenceApp/${idApprenant}`,
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
  findByApprenantIdContains1(idApprenant: number): __Observable<null> {
    return this.findByApprenantIdContains1Response(idApprenant).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idLigneAbscenceApp undefined
   */
  findById9Response(idLigneAbscenceApp: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/abscenceApp/get/${idLigneAbscenceApp}`,
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
   * @param idLigneAbscenceApp undefined
   */
  findById9(idLigneAbscenceApp: number): __Observable<null> {
    return this.findById9Response(idLigneAbscenceApp).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll9Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/abscenceApp/all`,
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
  }  findAll9(): __Observable<null> {
    return this.findAll9Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idLigneAbscenceApp undefined
   */
  delete9Response(idLigneAbscenceApp: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/AbscenceApp/delete/${idLigneAbscenceApp}`,
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
   * @param idLigneAbscenceApp undefined
   */
  delete9(idLigneAbscenceApp: number): __Observable<null> {
    return this.delete9Response(idLigneAbscenceApp).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module LigneAbscenceAppControllerService {
}

export { LigneAbscenceAppControllerService }
