import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any =[]
  public productList= new BehaviorSubject<any>([]);

  constructor() { }
  getBooks(){
   return this.productList.asObservable();
  }
  setBook(book :any){
    this.cartItemList.push(...book)
    this.productList.next(book)
  }
  addtoCart(book:any){
    this.cartItemList.push(book);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    
  }
  getTotalPrice():number{
    let grandTotel=0;
    this.cartItemList.map((a:any)=>{
      grandTotel+=a.total;
    })
    return grandTotel;
  }
  removeCartItem(book:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(book.id==a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList)
  }
  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList)
  }
}
