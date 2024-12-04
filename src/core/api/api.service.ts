import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, map, Observable, of, Subject, Subscribable } from 'rxjs';

// import { injectConfigs } from '../config/utils';
// import { DomainService } from '../services/domain-config.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  endpointApiConfig = 'http://localhost:3000/products';
  public observable = new BehaviorSubject<{type:number,input:string|null}>({type:0,input:null});
  getListAtm(body:any): Observable<any> {
     let search=''
    switch (body.type) {
      case 0: break;
      case 1:{ search='name'; break};
      case 2:{ search='manufacturer'; break};
      case 3:{ search='type'; break};
      case 4:{ search='seri'; break};
    }
    if(!search || !body.input){
      return this.http.get(this.endpointApiConfig)
    }
    return this.http.get(this.endpointApiConfig+'/?'+search+'='+body.input)
  }
  getListAtmDetail(id:string): Observable<any> {

   return this.http.get(this.endpointApiConfig+'/'+id)
 }
  getAdd(body:any): Observable<any> {
    console.log(body)
    return this.http.post(this.endpointApiConfig+'/',body)
  }
  getEdit(body:any): Observable<any> {
    return this.http.put(this.endpointApiConfig+'/'+body.id,body)
  }
  getDelete(id:string): Observable<any> {
    return this.http.delete(this.endpointApiConfig+'/'+id)
  }
  // login(body:any): Observable<any> {
  //   return this.http.post<any>(
  //     this.endpointApiConfig + `user-login/`
  //   ,body );
  // }
  // register(body:any): Observable<any> {
  //   return this.http.post<any>(
  //     this.endpointApiConfig + `create-user-account/`
  //   ,body );
  // }

  // getCustomer(): Observable<any>{
  //   return this.http.get<any>(
  //     this.endpointApiConfig + `customers/`
  //    );
  // }
  // createCustomer(body:any): Observable<any>{
  //   return this.http.post<any>(
  //     this.endpointApiConfig + `customers/`
  //   ,body );
  // }
  // getListStatus(): Observable<any>{
  //   return this.http.get<any>(
  //     this.endpointApiConfig + `customer-status/`
  //    );
  // }
  // getListSource(): Observable<any>{
  //   return this.http.get<any>(
  //     this.endpointApiConfig + `customer-source/`
  //    );
  // }
  // createSource(body:any): Observable<any>{
  //   return this.http.post<any>(
  //     this.endpointApiConfig + `customer-source/`
  //   ,body );
  // }
  // getListSocial(): Observable<any>{
  //   return this.http.get<any>(
  //     this.endpointApiConfig + `customer-social/`
  //    );
  // }
  // createSocial(body:any): Observable<any>{
  //   return this.http.post<any>(
  //     this.endpointApiConfig + `customer-social/`
  //   ,body );
  // }
  // getListServices(): Observable<any>{
  //   return this.http.get<any>(
  //     this.endpointApiConfig + `services/`
  //    );
  // }
  // createServices(body:any): Observable<any>{
  //   return this.http.post<any>(
  //     this.endpointApiConfig + `services/`
  //   ,body );
  // }
  
}
