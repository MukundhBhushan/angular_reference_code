import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../products/product.service';




@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  providers: [ProductService]
})

export class StarComponent{
    @Input() rating:number
    starWidth:number
    ngOnChanges() : void{
        this.starWidth=this.rating*86/5
    }
    
    @Output() ratingClicked:EventEmitter<string>=new EventEmitter

    onClick():void{
        //this.notify.emit("clicked")
        this.ratingClicked.emit(`this rating ${this.rating} was clicked`)
    }

}