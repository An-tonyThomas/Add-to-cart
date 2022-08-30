import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm:any;


    public totalItem:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getBooks()
    .subscribe(res=>{
      this.totalItem=res.length;

    })
  }

 
}
