import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail.component';
import { productListComponent } from './product-list.component';
import { ProductsGarudService } from './products-garud.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'products',component:productListComponent},
      {path:'products/:id',
            canActivate:[ProductsGarudService],
              component:ProductDetailComponent},
    ]),
    SharedModule


  ],
  declarations: [
    productListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    
    

  ],
  providers:[ProductsGarudService]
})
export class ProductModule { }
