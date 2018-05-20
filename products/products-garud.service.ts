import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductsGarudService implements CanActivate {


  constructor(private _router:Router) { }

  canActivate(route: ActivatedRouteSnapshot) :boolean{
    let id = +route.url[1].path
    if(isNaN(id) || id<1){
      alert("invalid id");
      this._router.navigate(['/products'])
      return false
    }
    return true;
  }

}
