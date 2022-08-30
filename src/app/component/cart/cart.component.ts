import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    
  public book:any=[];
  public grantTotal !: number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res=>{
      this.book=res;
      this.grantTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
