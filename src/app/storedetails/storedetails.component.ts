import { Component, OnInit, Input } from '@angular/core';
import { Storeservice } from '../store.service';
import {List} from 'immutable';

@Component({
  selector: 'app-storedetails',
  templateUrl: './storedetails.component.html',
  styleUrls: ['./storedetails.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  public store: List<any>;
  constructor(private storeService:Storeservice) { 
    this.storeService.getStore().subscribe(

      res => {
        this.store = res.Stores;
        console.log("Store data",this.store);
      })
  }

  ngOnInit() {
    
  }


}