import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public bookList:any;
  filterCategory:any;
  searchKey:any="";
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getBook()
    .subscribe(res=>{
      this.bookList=res;
      this.bookList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    
  }
  filter(categoryid:any){
    this.filterCategory=this.bookList
    .filter((item:any)=>{
      if(item.category==categoryid || categoryid==''){
      return item
      }
    })

  }
 addtocart(item:any){
  this.cartService.addtoCart(item);
 }
}
