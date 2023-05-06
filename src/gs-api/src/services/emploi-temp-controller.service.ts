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
class EmploiTempControllerService extends __BaseService {
  static readonly save5Path = '/gestionrepetition/V2/emploitemp/create';
  static readonly findByNiveauAndFilierePath = '/gestionrepetition/V2/emploitemp/{niveau}{filiere}';
  static readonly findById5Path = '/gestionrepetition/V2/emploitemp/get/{idEmploitemp}';
  static readonly findAll5Path = '/gestionrepetition/V2/emploitemp/all';
  static readonly delete5Path = '/gestionrepetition/V2/emploitemp/delete/{idEmploiTemp}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }
  save5Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionrepetition/V2/emploitemp/create`,
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
  }  save5(): __Observable<null> {
    return this.save5Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `EmploiTempControllerService.FindByNiveauAndFiliereParams` containing the following parameters:
   *
   * - `niveau`:
   *
   * - `filiere`:
   */
  findByNiveauAndFiliereResponse(params: EmploiTempControllerService.FindByNiveauAndFiliereParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/emploitemp/${params.niveau}${params.filiere}`,
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
   * @param params The `EmploiTempControllerService.FindByNiveauAndFiliereParams` containing the following parameters:
   *
   * - `niveau`:
   *
   * - `filiere`:
   */
  findByNiveauAndFiliere(params: EmploiTempControllerService.FindByNiveauAndFiliereParams): __Observable<null> {
    return this.findByNiveauAndFiliereResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEmploitemp undefined
   */
  findById5Response(idEmploitemp: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/emploitemp/get/${idEmploitemp}`,
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
   * @param idEmploitemp undefined
   */
  findById5(idEmploitemp: number): __Observable<null> {
    return this.findById5Response(idEmploitemp).pipe(
      __map(_r => _r.body as null)
    );
  }
  findAll5Response(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionrepetition/V2/emploitemp/all`,
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
  }  findAll5(): __Observable<null> {
    return this.findAll5Response().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idEmploiTemp undefined
   */
  delete5Response(idEmploiTemp: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionrepetition/V2/emploitemp/delete/${idEmploiTemp}`,
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
   * @param idEmploiTemp undefined
   */
  delete5(idEmploiTemp: number): __Observable<null> {
    return this.delete5Response(idEmploiTemp).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EmploiTempControllerService {

  /**
   * Parameters for findByNiveauAndFiliere
   */
  export interface FindByNiveauAndFiliereParams {
    niveau: string;
    filiere: string;
  }
}

export { EmploiTempControllerService }
