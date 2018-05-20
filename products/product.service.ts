import { Injectable } from "@angular/core";
import { IProducts } from "./products";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService{
    private _url ='./api/products/products.json';
    constructor(private http: HttpClient){}
    getProduct():Observable<IProducts[]>{
        return this.http.get<IProducts[]>(this._url)
                    .do(data=>console.log('All'+JSON.stringify(data)))
                    .catch(this.handleError)
        
    }
    private handleError(err: HttpErrorResponse){
        return Observable.throw(err.message)
    }
}