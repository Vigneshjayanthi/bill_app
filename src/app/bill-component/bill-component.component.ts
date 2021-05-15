import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bill-component',
  templateUrl: './bill-component.component.html',
  styleUrls: ['./bill-component.component.css']
})
export class BillComponentComponent implements OnInit {
 Item_lists=['1ltrs',"2 ltrs","3 ltrs","4 ltrs","5 ltrs","10 ltrs","15 ltrs","20 ltrs"];
 price:any=null ;
 quantity:any=null;
 litres:any=null
 list_product:any=[];
 item_count:number=0
 product={"item_id":0,"itemname":null,"qty":0, "price":0,"total":0};
 total_amount:number=0;
 paid_amount:number=0;
 due_amount:number=0;
 
  constructor() { 
    this.due_amount= this.total_amount-this.paid_amount;
  }

  addHandler(){
    this.item_count++;
    this.product={"item_id":this.item_count,"itemname":this.litres,"qty":this.quantity,"price":this.price,"total":this.quantity*this.price};
    this.list_product.push(this.product)
    this.total_amount+=(this.price*this.quantity);
    //console.log(this.list_product)
    this.price=" ";
    this.quantity= " ";
    this.litres =" ";
  }
  removeHandler(){
    this.item_count--;
    if(this.total_amount>0){
    this.total_amount=this.total_amount-(this.product.price*this.product.qty);
    }
    this.list_product.pop();
  }
 cancelOrder(){
   this.list_product=[];
   this.total_amount=0;
   this.paid_amount=0;
 }
  ngOnInit(): void {
    
  }

}
