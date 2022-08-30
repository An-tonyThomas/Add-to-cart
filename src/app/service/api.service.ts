import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  search=new BehaviorSubject("")

  constructor(private http: HttpClient) { }
  getBook(){
    return this.http.get<any>("http://localhost:3000/books")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
