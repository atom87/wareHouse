import { Document } from './../model/document';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DocumentList } from '../model/documentList';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const url = "http://localhost:3000/api/documents";

@Injectable({
  providedIn: 'root'
})
export class WHouseService {

  constructor(private http: HttpClient) { }

  getAll(params?) {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
          .set("page", params.page || '1')
          .set("pageSize", params.pageSize || '10')
          .set("sort", params.sort || '')
          .set("sortDirection", params.sortDirection || '')
      };
    }

    return this.http.get(url, queryParams).pipe(map(response => {
      return new DocumentList(response);
    }));
  }

  getDocument(id: number): Observable <Document>{
    return this.http.get(url + "/" + id).pipe(map( data => {
      return new Document(data);
    }));
  }

}
