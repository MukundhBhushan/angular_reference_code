import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProducts } from './products';
import { ProductService } from './product.service';
@Component({
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
  export class ProductDetailComponent implements OnInit {

    constructor(private _route: ActivatedRoute,private _router:Router){}

    pageTitle:string='product Details';
    product:IProducts

    ngOnInit() {
      let id = +this._route.snapshot.paramMap.get('id')
      this.pageTitle +=id
      this.product={
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
      }

    }
    onBack():void{
      this._router.navigate(['/products'])
    }

}
