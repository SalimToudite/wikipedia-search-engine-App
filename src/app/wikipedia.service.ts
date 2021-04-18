import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {pluck} from 'rxjs/Operators'; 

interface wikipediaResponse{
  query: {
    search: {
      title: string;
      snippet: string;
      pageid : number;
    }[];
  };
}
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {


  constructor(private http: HttpClient) {
    
   }

  public search(term: string){ 
    return this.http.get<wikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',  
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(pluck('query','search'));
  }
}
