import { Component, OnInit } from '@angular/core';
import {List} from 'immutable';
import { Storeservice } from '../store.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public catData: List<any>;
  public itemList: any = [2];
  public temp: any ;
  public alertmsg : boolean = false;
  constructor(private storeService:Storeservice) { 
    this.storeService.getCategories().subscribe(

      res => {
        this.catData = res;
        console.log("Categories data",this.catData);
      })
  }

  ngOnInit() {
    
  }
  addItem(item: any) {
    console.log("ite val",item);

    this.alertmsg = true;
    setTimeout(()=>{
      this.alertmsg = false;
    },2000);

    this.temp = [1];

    if(localStorage.getItem("Cart Id"))
    {
    this.temp = this.temp.concat(localStorage.getItem("Cart Id"));
    }
    this.itemList = this.temp.concat(item.Item.ID);
    localStorage.setItem("Cart Id",this.itemList);
    
  }

}