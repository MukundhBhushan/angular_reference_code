import { Component, OnInit } from '@angular/core';
import { IProducts } from './products';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class productListComponent implements OnInit{
  pageTitle: string='Product list'
  imgWidth :number=60;
  imgHeight:number = 60;
  showImg:boolean =false;
  __listFilter:string='';
  filteredProducts:IProducts[]=[]
  errMessage:string
  
  constructor(private _productService:ProductService){}





  get listFilter():string{
    return this.__listFilter;
  }
  
  set listFilter(value:string){
      this.__listFilter=value;
      this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter):this.products
  }
 

  products :IProducts[] =[]

    
    toggleImg():void{
        this.showImg=!this.showImg
    }
    ngOnInit():void{
        this._productService.getProduct()
                        .subscribe(products => {
                            this.products = products;
                            this.filteredProducts = this.products;
                        },
                            error => this.errMessage = <any>error);
        

    }

    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message:string):void{
        this.pageTitle= 'Product list '+message
    }
        
}



 