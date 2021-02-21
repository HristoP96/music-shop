import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface PurchaseItem{
  brandId: number, 
  price: number,
  date: string,

}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  @Input()
  brandId:number;

  @Input()
  public imageURl:string;

  public price: number;

  @Output()
  public onPurchaseMade: EventEmitter<PurchaseItem> = new EventEmitter()

  public buyItem(){
    let item = {
      brandId: this.brandId,
      price: this.price,
      date: new Date().toJSON().slice(0,10)
    }
    console.log(item);
    this.onPurchaseMade.emit(item)
  }
  constructor() { }

  ngOnInit(): void {
    this.price = Math.random() * 2500
  }

}
