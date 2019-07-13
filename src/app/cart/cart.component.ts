import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {List} from 'immutable';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public Items: List<any>;
  public ItemsData=[
    {ID:"987654",PromptForDesc:"Nachos",Price:6.00},
    {ID:"987655",PromptForDesc:"French Fries",Price:3.00},
    {ID:"987656",PromptForDesc:"Hummus & Pita",Price:12.00},
    {ID:"987657",PromptForDesc:"Hamburger",Price:6.00},
    {ID:"987658",PromptForDesc:"Chicken Wings",Price:9.00},
    {ID:"987659",PromptForDesc:"Steak Sandwich",Price:12.00},
    {ID:"987660",PromptForDesc:"Ice Cream",Price:6.00},
    {ID:"987661",PromptForDesc:"Cake",Price:9.00}
  ];
  public Itemsarray:any;
  public cartItems=[{ID:"",PromptForDesc:"",Price:0}];
  public totalPrice = 0;
  public recart: string = '1,';
  

  @Input() itemsList: any;

  constructor() { }

  ngOnInit() {
    this.getItems();
  }

removeItem(itemValue: any){
    //this.cartItems
    //this.retotalPrice=
    console.log("removed",itemValue);
    var index = this.cartItems.indexOf(itemValue);
    if (index !== -1) 
    this.cartItems.splice(index, 1);
    this.totalPrice = 0;
    console.log(this.cartItems);
    for(var i=1;i<this.cartItems.length;i++)
    {
      var flag=this.cartItems[i];
      this.recart=this.recart + flag.ID + ',';
      this.totalPrice=this.totalPrice + flag.Price;
    }

    localStorage.setItem("Cart Id",String(this.recart));
    if(this.cartItems.length==1)
    {
      localStorage.removeItem("Cart Id");
    }
  }

  public getItems()
  {
    this.Itemsarray=localStorage.getItem("Cart Id").split(',').map(Number);
    console.log("Cart:",this.Itemsarray);

    for(var i=0;i<this.Itemsarray.length;i++)
    {
      for(var j=0;j<this.ItemsData.length;j++)
      {
       if( this.Itemsarray[i]== this.ItemsData[j].ID)
       {
         this.cartItems.push(this.ItemsData[j]);
         this.totalPrice= this.totalPrice + (this.ItemsData[j].Price);
       }
      }
    }
    console.log("Added",this.cartItems);
    
  }
}